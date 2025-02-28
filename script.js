function toggleInputs() {
    const shape = document.getElementById('shape').value;
    const rectangleInputs = document.getElementById('rectangle-inputs');
    const circleInputs = document.getElementById('circle-inputs');
    
    if (shape === 'rectangle') {
        rectangleInputs.style.display = 'block';
        circleInputs.style.display = 'none';
    } else {
        rectangleInputs.style.display = 'none';
        circleInputs.style.display = 'block';
    }
}

function calculateArea() {
    const shape = document.getElementById('shape').value;
    let area;
    
    if (shape === 'rectangle') {
        const length = document.getElementById('length').value;
        const width = document.getElementById('width').value;
        area = length * width;
    } else {
        const radius = document.getElementById('radius').value;
        area = Math.PI * radius * radius;
    }
    
    document.getElementById('result').innerHTML = `The area is: ${area}`;
}
