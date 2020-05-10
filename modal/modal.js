$.modal = (props) => {
   const _indexModal =
      ({title = null, closable = true, content = null, width = null}) => {
         const div = document.createElement('div');
         div.classList.add('modal');
         div.insertAdjacentHTML('afterbegin',
            `<div class="modal__overlay">
             <div class="modal__main" style="width: ${width}rem"> 
               <div class="modal__header"> 
                 <h5>${title}</h5>
               </div>
               <div class="modal__body">
                 <p>${content}</p> 
               </div>
               <div class="modal_footer">
                 <button class="modal__submit" type="submit">submit</button>
                 <button class="modal__cancel" type="button">cancel</button> 
               </div>
             </div>
           </div> 
         `);
         if (!closable) {
            div.querySelector('.modal__cancel')
               .setAttribute('hidden', 'hidden');
         }
         document.body.appendChild(div);
         return div
      }; //end _indexModal

   const mounted = () => _indexModal(props);

   const $modal = mounted();

   const close = (e) => {
      const {target} = e;
      if (target.matches('.modal__overlay')
         || (target.matches('.modal__cancel'))) {
         $modal.classList.remove('open');
      }
   };

   const open = () => {
      $modal.classList.add('open');
   };

   const destroy = () => {
      $modal.removeEventListener('click', close);
      $modal.remove();
   };

   $modal.addEventListener('click', close);

   return {
      open,
      close,
      destroy,
   }
}; 