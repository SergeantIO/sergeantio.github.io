<script>
    document.addEventListener('DOMContentLoaded', () => {
        const hexagons = document.querySelectorAll('.hexagon');
        const hexagonRing = document.querySelector('.hexagon-ring');
        
        // Click on a hexagon to expand
        hexagons.forEach(hex => {
            hex.addEventListener('click', function() {
                if (!this.classList.contains('expanded')) {
                    // Expand the clicked hexagon
                    this.classList.add('expanded');
                    
                    // Add temporary list inside the expanded hexagon
                    const tempList = document.createElement('div');
                    tempList.classList.add('temp-list');
                    tempList.innerHTML = `
                        <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                            <li>Item 4</li>
                        </ul>
                    `;
                    this.appendChild(tempList);
                }
            });
        });

        // Click outside the hexagon to shrink it
        document.addEventListener('click', function(e) {
            if (!hexagonRing.contains(e.target)) {
                hexagons.forEach(hex => {
                    if (hex.classList.contains('expanded')) {
                        hex.classList.remove('expanded');
                        const tempList = hex.querySelector('.temp-list');
                        if (tempList) {
                            hex.removeChild(tempList); // Remove the temp list when shrinking
                        }
                    }
                });
            }
        });
    });
</script>

