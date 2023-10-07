// Function to open the modal
export default function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "flex";
}

// Function to close the modal
export function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}