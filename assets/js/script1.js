// script.js

let generatedPDF; // Variable to store the generated PDF

function previewPDF() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Generate the PDF without saving it yet
    generatedPDF = generatePDF(name, email, message);

    // Convert the PDF to Blob for preview
    const blob = generatedPDF.output('bloburl');

    // Display the PDF in the modal using PDFObject
    PDFObject.embed(blob, "#pdfPreview");

    // Show the preview modal
    const pdfPreviewModal = new bootstrap.Modal(document.getElementById('pdfPreviewModal'));
    pdfPreviewModal.show();
}

function generatePDF(name, email, message) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const logoImg = new Image();
    logoImg.src = 'assets/img/Logo.png';

    logoImg.onload = function() {
        doc.setFillColor(240, 248, 255);
        doc.rect(0, 0, 210, 297, 'F');

        doc.addImage(logoImg, 'PNG', 10, 10, 50, 20);

        doc.setFont("helvetica", "bold");
        doc.setFontSize(20);
        doc.setTextColor(0, 102, 204);
        doc.text("User Information", 105, 40, null, null, "center");

        doc.setFillColor(255, 255, 255);
        doc.setDrawColor(0, 102, 204);
        doc.roundedRect(10, 50, 190, 70, 3, 3, 'FD');

        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text(`Name: ${name}`, 20, 65);
        doc.text(`Email: ${email}`, 20, 80);
        doc.text(`Message:`, 20, 95);

        doc.setFontSize(10);
        const splitMessage = doc.splitTextToSize(message, 170);
        doc.text(splitMessage, 20, 105);

        doc.setDrawColor(0, 102, 204);
        doc.line(10, 280, 200, 280);

        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text('© Your Company - Generated on ' + new Date().toLocaleDateString(), 105, 285, null, null, "center");

        // Save the PDF for preview
        generatedPDF = doc;
    };

    logoImg.onerror = function() {
        alert('Logo image could not be loaded. Please check the path.');
    };

    // Return the generated PDF object
    return doc;
}

function downloadPDF() {
    if (generatedPDF) {
        generatedPDF.save('custom-ui-form-data.pdf');
    }
}

function enableEdit() {
    const formData = JSON.parse(window.localStorage.getItem('formData'));

    if (formData) {
        document.getElementById('name').value = formData.name;
        document.getElementById('email').value = formData.email;
        document.getElementById('message').value = formData.message;

        document.getElementById('name').disabled = false;
        document.getElementById('email').disabled = false;
        document.getElementById('message').disabled = false;
    } else {
        alert('No data available for editing.');
    }
}
