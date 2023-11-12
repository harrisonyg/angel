function generatePattern() {
    // Retrieve input values
    const chestSize = Number(document.getElementById("chest-size").value);
    const shoulderSize = Number(document.getElementById("shoulder-size").value);
    const sleeveLength = Number(document.getElementById("sleeve-length").value);
    const shirtLength = Number(document.getElementById("shirt-length").value);
  
    // Create canvas element
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 800;
    canvas.height = 600;
  
    // Calculate panel dimensions
    const frontPanel = {
      width: chestSize / 2 + 2,
      length: shirtLength,
      armhole: shoulderSize / 2,
      waist: chestSize / 2 + 2,
      hem: chestSize / 2 + 2,
    };
  
    const backPanel = {
      width: chestSize / 2 + 2,
      length: shirtLength,
      armhole: shoulderSize / 2,
      waist: chestSize / 2 + 2,
      hem: chestSize / 2 + 2,
    };
  
    const sleevePanel = {
      width: sleeveLength,
      length: shirtLength / 2 + 2,
      armhole: shoulderSize / 2,
      cuff: chestSize / 4,
    };
  
    // Set canvas dimensions
    canvas.width = frontPanel.width + backPanel.width + sleevePanel.width;
    canvas.height = Math.max(frontPanel.length, sleevePanel.length);
  
    // Draw front panel
    drawFrontPanel(ctx, frontPanel);
  
    // Draw back panel
    drawBackPanel(ctx, backPanel);
  
    // Draw sleeve panel
    drawSleevePanel(ctx, sleevePanel);
  }
  


  function drawFrontPanel(ctx, frontPanel) {
    const { width, length, armhole, waist, hem } = frontPanel;
  
    // Draw the front panel
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(width, 0);
    ctx.lineTo(width, length);
    ctx.lineTo(waist, length);
    ctx.lineTo(waist, hem);
    ctx.lineTo(0, hem);
    ctx.closePath();
    ctx.stroke();
  
    // Draw the armhole curve
    ctx.beginPath();
    ctx.moveTo(0, armhole);
    ctx.quadraticCurveTo(width / 4, armhole - 5, width / 2, armhole);
    ctx.quadraticCurveTo(width * 3 / 4, armhole + 5, width, armhole);
    ctx.stroke();
  
    // Draw the neck curve
    ctx.beginPath();
    ctx.moveTo(width / 4, 0);
    ctx.quadraticCurveTo(width / 2, armhole / 2, width * 3 / 4, 0);
    ctx.stroke();
  
    // Draw the chest measurement line
    ctx.beginPath();
    ctx.moveTo(width / 4, 0);
    ctx.lineTo(width / 4, length);
    ctx.stroke();
  
    // Draw the waist measurement line
    ctx.beginPath();
    ctx.moveTo(waist, 0);
    ctx.lineTo(waist, length);
    ctx.stroke();
  
    // Draw the armhole measurement line
    ctx.beginPath();
    ctx.moveTo(0, armhole);
    ctx.lineTo(width, armhole);
    ctx.stroke();
  
    // Draw the shoulder measurement line
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(width, 0);
    ctx.stroke();
  
    // Draw the length measurement line
    ctx.beginPath();
    ctx.moveTo(width / 2, length);
    ctx.lineTo(width / 2, length + 20);
    ctx.stroke();
  }
  
  function drawBackPanel(ctx, backPanel) {
    const { width, length, armhole, waist, hem } = backPanel;
  
    // Draw the back panel
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(width, 0);
    ctx.lineTo(width, length);
    ctx.lineTo(waist, length);
    ctx.lineTo(waist, hem);
    ctx.lineTo(0, hem);
    ctx.closePath();
    ctx.stroke();
  
    // Draw the armhole curve
    ctx.beginPath();
    ctx.moveTo(0, armhole);
    ctx.quadraticCurveTo(width / 4, armhole - 5, width / 2, armhole);
    ctx.quadraticCurveTo(width * 3 / 4, armhole + 5, width, armhole);
    ctx.stroke();
  
    // Draw the neck curve
    ctx.beginPath();
    ctx.moveTo(width / 4, 0);
    ctx.quadraticCurveTo(width / 2, armhole / 2, width * 3 / 4, 0);
    ctx.stroke();
  
    // Draw the chest measurement line
    ctx.beginPath();
    ctx.moveTo(width / 4, 0);
    ctx.lineTo(width / 4, length);
    ctx.stroke();
  
    // Draw the waist measurement line
    ctx.beginPath();
    ctx.moveTo(waist, 0);
    ctx.lineTo(waist, length);
    ctx.stroke();
  
    // Draw the armhole measurement line
    ctx.beginPath();
    ctx.moveTo(0, armhole);
    ctx.lineTo(width, armhole);
    ctx.stroke();
  
    // // Draw the shoulder measurement line
    // ctx.beginPath();
    // ctx.moveTo
  
  
 
  
    // Draw the back panel
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(width, 0);
    ctx.lineTo(width, length);
    ctx.lineTo(waist, length);
    ctx.lineTo(waist, hem);
    ctx.lineTo(0, hem);
    ctx.closePath();
    ctx.stroke();
  
    // Draw the armhole curve
    ctx.beginPath();
    ctx.moveTo(0, armhole);
    ctx.quadraticCurveTo(width / 4, armhole - 5, width / 2, armhole);
    ctx.quadraticCurveTo(width * 3 / 4, armhole + 5, width, armhole);
    ctx.stroke();
  
    // Draw the neck curve
    ctx.beginPath();
    ctx.moveTo(width / 4, 0);
    ctx.quadraticCurveTo(width / 2, armhole / 2, width * 3 / 4, 0);
    ctx.stroke();
  }
  
  function drawSleevePanel(ctx, sleevePanel) {
    const { width, length, armhole, cuff } = sleevePanel;
  
    // Draw the sleeve panel
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(width, 0);
    ctx.lineTo(width, length);
    ctx.lineTo(0, length);
    ctx.closePath();
    ctx.stroke();
  
    // Draw the armhole curve
    ctx.beginPath();
    ctx.moveTo(0, armhole);
    ctx.quadraticCurveTo(width / 4, armhole + cuff / 2, width / 2, armhole + cuff);
    ctx.quadraticCurveTo(width * 3 / 4, armhole + cuff / 2, width, armhole);
    ctx.stroke();
  
    // Draw the cuff curve
    ctx.beginPath();
    ctx.moveTo(0, length - cuff);
    ctx.quadraticCurveTo(width / 4, length - cuff / 2, width / 2, length);
    ctx.quadraticCurveTo(width * 3 / 4, length - cuff / 2, width, length - cuff);
    ctx.stroke();
  }
  