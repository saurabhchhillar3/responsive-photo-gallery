let currentImageIndex;

document.querySelectorAll('.image-container').forEach((container, index) => {
    container.addEventListener('click', function () {
        currentImageIndex = index + 1;
        openModal(currentImageIndex);
    });
});

function openModal(index) {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modal-image').src = `image${index}.jpg`;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 1) {
        currentImageIndex = 20;
    } else if (currentImageIndex > 20) {
        currentImageIndex = 1;
    }
    document.getElementById('modal-image').src = `image${currentImageIndex}.jpg`;
}

window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}
