// // script.js
function generatePDF() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Load the jsPDF library
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Load the image as a base64 string
    const logoImg = new Image();
    logoImg.src = 'assets/img/Logo.png'; // Path to your logo

    logoImg.onload = function() {
        // Add the logo to the PDF
        doc.addImage(logoImg, 'PNG', 10, 10, 50, 20); // Adjust dimensions as needed

        // Add the form data
        doc.setFontSize(12);
        doc.text(`Name: ${name}`, 10, 40);
        doc.text(`Email: ${email}`, 10, 50);
        doc.text(`Message: ${message}`, 10, 60);

        // Add a footer
        doc.setFontSize(10);
        doc.text('© Your Company', 10, 280);

        // Save the PDF
        doc.save('form-data.pdf');
    };

    // Handle image loading error
    logoImg.onerror = function() {
        alert('Logo image could not be loaded. Please check the path.');
    };
}

//with api integration

// function saveDataAndGeneratePDF() {
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     // Save data to database
//     const formData = { name, email, message };
    
//     fetch('http://localhost:3000/saveFormData', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Data saved:', data);
//         generatePDF(name, email, message);
//         document.getElementById("editButton").style.display = "block";
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });
// }

// function generatePDF(name, email, message) {
//     const { jsPDF } = window.jspdf;
//     const doc = new jsPDF();

//     const logoImg = new Image();
//     logoImg.src = 'assets/img/Logo.png';

//     logoImg.onload = function() {
//         doc.setFillColor(240, 248, 255);
//         doc.rect(0, 0, 210, 297, 'F');

//         doc.addImage(logoImg, 'PNG', 10, 10, 50, 20);

//         doc.setFont("helvetica", "bold");
//         doc.setFontSize(20);
//         doc.setTextColor(0, 102, 204);
//         doc.text("User Information", 105, 40, null, null, "center");

//         doc.setFillColor(255, 255, 255);
//         doc.setDrawColor(0, 102, 204);
//         doc.roundedRect(10, 50, 190, 70, 3, 3, 'FD');

//         doc.setFontSize(12);
//         doc.setTextColor(0, 0, 0);
//         doc.text(`Name: ${name}`, 20, 65);
//         doc.text(`Email: ${email}`, 20, 80);
//         doc.text(`Message:`, 20, 95);

//         doc.setFontSize(10);
//         const splitMessage = doc.splitTextToSize(message, 170);
//         doc.text(splitMessage, 20, 105);

//         doc.setDrawColor(0, 102, 204);
//         doc.line(10, 280, 200, 280);

//         doc.setFontSize(10);
//         doc.setTextColor(100, 100, 100);
//         doc.text('© Your Company - Generated on ' + new Date().toLocaleDateString(), 105, 285, null, null, "center");

//         doc.save('custom-ui-form-data.pdf');
//     };

//     logoImg.onerror = function() {
//         alert('Logo image could not be loaded. Please check the path.');
//     };
// }

// function enableEdit() {
//     fetch('http://localhost:3000/getFormData')
//     .then(response => response.json())
//     .then(data => {
//         document.getElementById('name').value = data.name;
//         document.getElementById('email').value = data.email;
//         document.getElementById('message').value = data.message;

//         // Enable form fields for editing
//         document.getElementById('name').disabled = false;
//         document.getElementById('email').disabled = false;
//         document.getElementById('message').disabled = false;
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });
// }

// function saveDataAndGeneratePDF() {
//     // Get the form data
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     // Generate the PDF directly without saving to a database
//     generatePDF(name, email, message);

//     // Enable the Edit button for testing purposes
//     document.getElementById("editButton").style.display = "block";

//     // Mock saving data for edit functionality
//     window.localStorage.setItem('formData', JSON.stringify({ name, email, message }));
// }

// function generatePDF(name, email, message) {
//     const { jsPDF } = window.jspdf;
//     const doc = new jsPDF();

//     const logoImg = new Image();
//     logoImg.src = 'assets/img/Logo.png';

//     logoImg.onload = function() {
//         doc.setFillColor(240, 248, 255);
//         doc.rect(0, 0, 210, 297, 'F');

//         doc.addImage(logoImg, 'PNG', 10, 10, 50, 20);

//         doc.setFont("helvetica", "bold");
//         doc.setFontSize(20);
//         doc.setTextColor(0, 102, 204);
//         doc.text("User Information", 105, 40, null, null, "center");

//         doc.setFillColor(255, 255, 255);
//         doc.setDrawColor(0, 102, 204);
//         doc.roundedRect(10, 50, 190, 70, 3, 3, 'FD');

//         doc.setFontSize(12);
//         doc.setTextColor(0, 0, 0);
//         doc.text(`Name: ${name}`, 20, 65);
//         doc.text(`Email: ${email}`, 20, 80);
//         doc.text(`Message:`, 20, 95);

//         doc.setFontSize(10);
//         const splitMessage = doc.splitTextToSize(message, 170);
//         doc.text(splitMessage, 20, 105);

//         doc.setDrawColor(0, 102, 204);
//         doc.line(10, 280, 200, 280);

//         doc.setFontSize(10);
//         doc.setTextColor(100, 100, 100);
//         doc.text('© Your Company - Generated on ' + new Date().toLocaleDateString(), 105, 285, null, null, "center");

//         doc.save('custom-ui-form-data.pdf');
//     };

//     logoImg.onerror = function() {
//         alert('Logo image could not be loaded. Please check the path.');
//     };
// }

// function enableEdit() {
//     // Retrieve mock data from localStorage
//     const formData = JSON.parse(window.localStorage.getItem('formData'));

//     if (formData) {
//         document.getElementById('name').value = formData.name;
//         document.getElementById('email').value = formData.email;
//         document.getElementById('message').value = formData.message;

//         // Enable form fields for editing
//         document.getElementById('name').disabled = false;
//         document.getElementById('email').disabled = false;
//         document.getElementById('message').disabled = false;
//     } else {
//         alert('No data available for editing.');
//     }
// }


