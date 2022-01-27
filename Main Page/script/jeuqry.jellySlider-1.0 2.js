(function () {
	$.fn.jellySlider2 = function (options) {
		this.each(function () {
			var el = $(this);
			var _ = {
				this: el,
				list: el.find('.jelly-list2'),
				slides: el.find('.jelly-slide2'),
				slidesLength: el.find('.jelly-slide2').length,
				currentSlide: 0,
				currentPosition: 0,
				movePosition: el.outerWidth(),
				options: {
					arrows: true,
					navigations: true,
					loop: false,
					speed: 500,
					fade: false,
					drag: false,
					vertical: false,
					view: 1,
					move: 1,
					margin: 0,
				},
				mouseEvent: null,
				btnPrev: el.find('.jelly-prev2').length ? el.find('.jelly-prev2') : null,
				btnNext: el.find('.jelly-next2').length ? el.find('.jelly-next2') : null,
				setOptions: null,
				init: function () {
					_.setOptions = $.extend({}, _.options, options);
					_.this.addClass('jelly-activated');
					_.list.css({
						transition: _.setOptions.speed + 'ms',
					});
					$(_.slides[_.currentSlide]).addClass('jelly-active2');
				}
			};
			_.init();



			// 함수
			var jelly = {
				init: function () {
					this.setIndex(_);
					this.setWidth(_);
					this.setArrows(_);
					this.loop(_);
					this.fade(_);
					this.dragAble(_);
					this.multipleSlider(_);
				},
				setIndex: function (_) {
					_.slides.each(function (i) {
						$(this).attr('data-jelly-index', i);
					})
				},
				setWidth: function (_) {
					_.slides.css({
						width: _.this.outerWidth()
					});

					var slidesLength = _.setOptions.loop ? _.slidesLength + 2 : _.slidesLength;
					var listWidth = _.this.outerWidth() * slidesLength;

					if (_.setOptions.view > 1) {
						_.movePosition = (((_.this.outerWidth() - (_.setOptions.margin * (_.setOptions.view - 1)))) / _.setOptions.view) * _.setOptions.move + (_.setOptions.margin * _.setOptions.move);
						if (_.setOptions.loop) {
							if (!_.setOptions.move % 2) {
								slidesLength = (_.slidesLength + (_.setOptions.view - 1) * 2);
							} else {
								slidesLength = _.slidesLength;
							}
						} else {
							slidesLength = _.slidesLength;
						}
						listWidth = _.movePosition * slidesLength;
					}

					_.list.css({
						width: listWidth,
					});
				},
				setArrows: function (_) {
					if (_.setOptions.arrows) {
						if (_.slidesLength > 1) {
							var addPrev = _.this.append('<button type="button" class="jelly-prev2">이전</button>');
							var addNext = _.this.append('<button type="button" class="jelly-next2">다음</button>');
							_.btnPrev = addPrev.find('.jelly-prev2');
							_.btnNext = addNext.find('.jelly-next2');
						}
						_.btnNext.off('click.nextClick').on('click.nextClick', function (e) {
							jelly.moveNext();
						});
						_.btnPrev.off('click.prevClick').on('click.prevClick', function () {
							jelly.movePrev();
						});
					}
				},
				moveNext: function () {
					if (_.setOptions.view > 1) {
						_.movePosition = (((_.this.outerWidth() - (_.setOptions.margin * (_.setOptions.view - 1)))) / _.setOptions.view) * _.setOptions.move + (_.setOptions.margin * _.setOptions.move);
					}
					if (_.setOptions.loop) {
						_.slidesLength = _.this.find('.jelly-slide2').length;
						if (_.currentSlide <= _.slidesLength - 2) {
							_.currentSlide += 1;
							_.currentPosition = _.currentPosition + _.movePosition;
							_.list.css({
								transition: _.setOptions.speed + 'ms',
								transform: 'translateX(-' + _.currentPosition + 'px)'
							});

							jelly.checkActive(_, _.currentSlide);

							if (_.currentPosition >= _.list.outerWidth() - _.this.outerWidth() - _.setOptions.margin) {
								moveFirst();
							}
						}
					} else {
						if (_.currentSlide < _.slidesLength - 1) {
							_.currentSlide += 1;
							_.currentPosition = _.currentPosition + _.movePosition;
							_.list.css({
								transition: _.setOptions.speed + 'ms',
								transform: 'translateX(-' + _.currentPosition + 'px)'
							});
						}
						jelly.checkActive(_, _.currentSlide);
					}
					function moveFirst() {
						setTimeout(() => {
							_.currentSlide = 1;
							if (_.setOptions.view > 1) {
								_.currentPosition = _.movePosition * (_.setOptions.view - 2);
							} else {
								_.currentPosition = _.movePosition;
							}
							_.list.css({
								transition: 'none',
								transform: 'translateX(-' + _.currentPosition + 'px)'
							});
							jelly.checkActive(_, _.currentSlide);
						}, _.setOptions.speed + 10);
					}
				},
				movePrev: function () {
					if (_.setOptions.view > 1) {
						_.movePosition = (((_.this.outerWidth() - (_.setOptions.margin * (_.setOptions.view - 1)))) / _.setOptions.view) * _.setOptions.move + (_.setOptions.margin * _.setOptions.move);
					}
					if (_.setOptions.loop) {
						_.slidesLength = _.this.find('.jelly-slide2').length;
						_.currentSlide += -1;
						_.currentPosition = _.currentPosition - _.movePosition;
						_.list.css({
							transition: _.setOptions.speed + 'ms',
							transform: 'translateX(-' + _.currentPosition + 'px)'
						});

						jelly.checkActive(_, _.currentSlide);

						if (_.currentPosition <= 0) {
							moveLast();
						}
					} else {
						if (_.currentSlide > 0) {
							_.currentSlide += -1;
							_.currentPosition = _.currentPosition - _.movePosition;
							_.list.css({
								transition: _.setOptions.speed + 'ms',
								transform: 'translateX(-' + _.currentPosition + 'px)'
							});
						}
						jelly.checkActive(_, _.currentSlide);
					}
					function moveLast() {
						setTimeout(() => {
							_.currentSlide = _.slidesLength - 2;
							if (_.setOptions.view > 1) {
								if (!_.setOptions.move % 0) {
									_.currentPosition = _.movePosition * (_.slidesLength + 2 - _.setOptions.view * 2);
								} else {
									_.currentPosition = _.movePosition * (_.slidesLength / _.setOptions.move);
									// 여기수정
								}
							} else {
								_.currentPosition = _.movePosition;
							}
							_.list.css({
								transition: 'none',
								transform: 'translateX(-' + _.currentPosition + 'px)'
							});
							jelly.checkActive(_, _.currentSlide);
						}, _.setOptions.speed + 10);
					}
				},
				loop: function (_) {
					if (_.setOptions.move > 1) {
						if (_.setOptions.margin) {
							_.movePosition = (_.this.outerWidth() - (_.setOptions.margin * (_.setOptions.view - 1))) / _.setOptions.view + _.setOptions.margin;
						} else {
							_.movePosition = (_.this.outerWidth() / _.setOptions.view);
						}
					}
					if (_.setOptions.loop) {
						_.currentSlide = 1;
						var cloneNumber = 1;
						var clonedAfter = _.slides.slice(0, cloneNumber);
						var clonedBefore = _.slides.slice(-cloneNumber);
						if (_.setOptions.view === 1) {
							clonedAfter.clone().appendTo(_.list).addClass('jelly-cloned');
							clonedBefore.clone().prependTo(_.list).addClass('jelly-cloned');
						} else {
							if (!_.setOptions.move % 2) {
								cloneNumber = _.setOptions.view - 1;
							} else {
								cloneNumber = _.setOptions.view;
							}
							clonedAfter = _.slides.slice(0, cloneNumber);
							clonedBefore = _.slides.slice(-cloneNumber);
							clonedAfter.clone().appendTo(_.list).addClass('jelly-cloned');
							clonedBefore.clone().prependTo(_.list).addClass('jelly-cloned');
						}
						_.currentPosition = _.movePosition;
						if (_.setOptions.view > 1) {
							if (!_.setOptions.move % 2) {
								_.currentPosition = _.movePosition * (_.setOptions.view - 1);
							} else {
								_.currentPosition = _.movePosition * _.setOptions.view;
							}
						}
						_.list.css({
							transition: 'none',
							transform: 'translateX(-' + _.currentPosition + 'px)'
						});
					}
				},
				checkActive: function (_, curr) {
					_.slides = _.list.find('.jelly-slide2');
					_.slides.each(function (i) {
						if (i === curr) {
							$(this).addClass('jelly-active2');
						} else {
							$(this).removeClass('jelly-active2');
						}
					});
				},
				fade: function (_) {
					if (_.setOptions.fade) {
						_.this.addClass('jelly-fade2');
						_.slides.css({
							transition: _.setOptions.speed + 'ms',
						})
					}
				},
				dragAble: function (_) {
					if (_.setOptions.drag) {
						var direction = "",
							oldx = 0;
						_.slides.off('mousedown.mouseDownEvent').on('mousedown.mouseDownEvent', function (e) {
							$(e.target).on('mousemove.detectDirection', function (e) {
								if (e.pageX < oldx) {
									direction = "left"
								} else if (e.pageX > oldx) {
									direction = "right"
								}
								oldx = e.pageX;
							})
						})
							.on('mouseup.mouseUpEvent', function (e) {
								if (direction === 'left') {
									jelly.moveNext(_);
								} else {
									jelly.movePrev(_);
								}
								$(e.target).off('mousemove.detectDirection');
							});
					}
				},
				multipleSlider: function (_) {
					if (_.setOptions.view <= 1) {
						_.setOptions.view = 1
					} else {
						var slideWidth,
							slideMargin;
						if (_.setOptions.margin) {
							slideMargin = _.setOptions.margin + 'px'
							slideWidth = (_.this.outerWidth() - (_.setOptions.margin * (_.setOptions.view - 1))) / _.setOptions.view;
						} else {
							slideWidth = _.this.outerWidth() / _.setOptions.view;
						}
						_.list.find('.jelly-slide2').css({
							width: slideWidth + 'px',
							marginRight: slideMargin,
						})
					}
				}
			}
			jelly.init();
		});
	}
})(jQuery);