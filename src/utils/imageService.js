export const getHostelImage = (id) => {
      const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#33FFF5']
      const color = colors[id % colors.length]
      
      // Properly encode the SVG
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
        <rect width="400" height="300" fill="${color}"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="24" fill="#ffffff">
          Hostel ${id}
        </text>
      </svg>`
      
      return `data:image/svg+xml;base64,${btoa(svg)}`
    }
