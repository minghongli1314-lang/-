import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const NetworkBackground: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('position', 'absolute')
      .style('top', 0)
      .style('left', 0)
      .style('z-index', 0)
      .style('pointer-events', 'none'); // Ensure clicks pass through, but we track mouse globally

    // Generate more nodes for denser effect
    const nodes = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      baseR: Math.random() * 2 + 1,
      r: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5
    }));

    // Mouse interaction
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Initial draw
    const linkGroup = svg.append('g').attr('class', 'links');
    const nodeGroup = svg.append('g').attr('class', 'nodes');

    // Create selection placeholders
    let linkSelection = linkGroup.selectAll('line');
    
    const nodeSelection = nodeGroup.selectAll('circle')
      .data(nodes)
      .enter().append('circle')
      .attr('r', d => d.r)
      .attr('fill', (d, i) => i % 3 === 0 ? '#bc13fe' : '#0ea5e9') // Mix purple and blue
      .attr('opacity', 0.6);

    const simulation = d3.forceSimulation(nodes as any)
      .velocityDecay(0)
      .alphaTarget(0)
      .on('tick', () => {
        // Move nodes
        nodes.forEach(node => {
          node.x += node.vx;
          node.y += node.vy;

          // Mouse repel effect
          const dx = node.x - mouseX;
          const dy = node.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const force = (150 - dist) / 150;
            node.x += (dx / dist) * force * 2;
            node.y += (dy / dist) * force * 2;
            node.r = node.baseR * (1 + force); // Grow when near mouse
          } else {
            node.r = node.baseR;
          }

          // Wrap around screen
          if (node.x < -50) node.x = width + 50;
          if (node.x > width + 50) node.x = -50;
          if (node.y < -50) node.y = height + 50;
          if (node.y > height + 50) node.y = -50;
        });

        // Recompute links dynamically
        const dynamicLinks: { source: typeof nodes[0]; target: typeof nodes[0]; dist: number }[] = [];
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 120) {
              dynamicLinks.push({ source: nodes[i], target: nodes[j], dist: distance });
            }
          }
        }

        // Update visual links
        linkSelection = linkGroup.selectAll('line').data(dynamicLinks);
        
        linkSelection.exit().remove();
        
        const linksEnter = linkSelection.enter().append('line')
          .attr('stroke-width', 0.5);
          
        linkSelection.merge(linksEnter as any)
          .attr('x1', d => d.source.x)
          .attr('y1', d => d.source.y)
          .attr('x2', d => d.target.x)
          .attr('y2', d => d.target.y)
          .attr('stroke', d => {
            const opacity = 1 - d.dist / 120;
            return `rgba(14, 165, 233, ${opacity * 0.5})`;
          });

        // Update nodes
        nodeSelection
          .attr('cx', d => d.x)
          .attr('cy', d => d.y)
          .attr('r', d => d.r);
      });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      simulation.stop();
      svg.selectAll('*').remove();
    };
  }, []);

  return <svg ref={svgRef} className="absolute inset-0 w-full h-full" />;
};

export default NetworkBackground;