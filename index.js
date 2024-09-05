const modal = new bootstrap.Modal("#exampleModal")

const nameEl = document.querySelector('[name="name"]')

const handleInputChange = (event) => {
    console.log(event.target.value);
    // 모달닫기//
    modal.hide();
}

nameEl.addEventListener("change", handleInputChange)

