const props = {
   title: 'You Modal',
   closable: true,
   content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi iusto libero magni non officia quis
      voluptatibus? A aliquam amet aperiam aspernatur at atque beatae commodi consectetur corporis deleniti dolor
       eos error et eum hic in itaque, iure libero minima molestiae necessitatibus nihil non obcaecati odio officia
       pariatur perferendis placeat porro quisquam quo sapiente tempore unde vel vitae voluptate voluptatem
       voluptates!`,
   width: 40
};

const modal = $.modal(props);

// const mo = modal.open;
// const mc = modal.close;
// const md = modal.destroy;

const activateMainModals = (e) => {
   const {target} = e;
   if (target.matches('button')) {
      modal.open();
   }
};

document.querySelector('.modalsActivate')
   .addEventListener('click', activateMainModals);

