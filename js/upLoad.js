export const upLoad = () => {
  const uploadFile = document.querySelector('#upload-file');
  const uploadForm = document.querySelector('.img-upload__form');
  const editPictureForm = document.querySelector('.img-upload__overlay');
  const modalCloseElement = document.querySelector('#upload-cancel');

  editPictureForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener ('keydown', () => {
    uploadForm.reset();
  });

  const onPopupEscKeydown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      editPictureForm.classList.add('hidden');
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', onPopupEscKeydown);
      modalCloseElement.removeEventListener ('click', () => {
        uploadForm.reset();
      });
    }
  };

  uploadFile.addEventListener('change', () => {
    editPictureForm.classList.remove('hidden');
    document.body.classList.add('modal-open');
    modalCloseElement.addEventListener('click', () => {
      editPictureForm.classList.add('hidden');
      document.body.classList.remove('modal-open');
    });
    document.addEventListener ('keydown', onPopupEscKeydown);
  });
};

const btn = document.querySelector('.img-upload__submit');
const text1 = document.querySelector('.text__description');

function ctrlButton() {
  btn.disabled = this.value.trim().length === 0;
}

text1.addEventListener('input', ctrlButton, false);
ctrlButton.call(text1);