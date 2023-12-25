function initApp() {
  /**
    Конфиг модальных окон
    Документация - https://github.com/kylefox/jquery-modal
  */
  $.modal.defaults = Object.assign($.modal.defaults, {
    closeExisting: false,
    showClose: false,
  });

  $('[data-modal]').on('click', function (evt) {
    evt.preventDefault();
    evt.stopPropagation();

    $($(this).data('modal')).modal();
  });
}

$(document).ready(initApp);
