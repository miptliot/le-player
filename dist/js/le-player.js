/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Control = __webpack_require__(1);

	var _Control2 = _interopRequireDefault(_Control);

	var _Icon = __webpack_require__(4);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _ControlFactory = __webpack_require__(5);

	var _ControlFactory2 = _interopRequireDefault(_ControlFactory);

	var _cookie = __webpack_require__(9);

	var _cookie2 = _interopRequireDefault(_cookie);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	(function ($) {

		/**
	  * @class Player
	  * @param {jQuery} element Element when player will init
	  * @param {Object} [options]
	  * @param {Boolean} [options.autoplay=false]
	  * When present, the video will automatically start playing as soon as it can do so without stopping.
	  * @param {String|Number} [options.height='auto'] Height of video container
	  * @param {String} [options.width] Width of video container
	  * @param {Boolean} [options.loop=false]
	  * When present, it specifies that the video will start over again, every time it is finished.
	  * @param {Boolean} [options.muted=false]
	  * When present, it specifies that the audio output of the video should be muted.
	  * @param {String} [options.preload='metadata'] Can be ('auto'|'metadata'|'none')
	  * @param {String} [options.poster] Path to poster of video
	  * @param {String} [options.svgPath] Path to svg sprite for icons
	  * @param {Number} [options.fullscreen] Fullscreen options
	  * @param {Number} [options.fullscreen.hideTimelineTime=7000] Delay before hide timeline in fullscreen view
	  * @param {Object} [options.rate] Rate options
	  * @param {Number} [options.rate.step=0.25] Step of increase/decrease by rate control
	  * @param {Number} [options.rate.min=0.5] Min of rate
	  * @param {Number} [options.rate.max=4.0] Max of rate
	  * @param {Number} [options.rate.default=1]
	  * @param {Object} [options.playback] Playback options
	  * @param {Object} [options.playback.step]
	  * @param {Nubmer} [options.playback.step.short=5]
	  * @param {Nubmer} [options.playback.step.medium=30]
	  * @param {Nubmer} [options.playback.step.long=60]
	  * @param {Obejct} [options.controls] Object of controls
	  * @param {String[]} [options.controls.common] Array of controls for default view
	  * @param {String[]} [options.controls.fullscreen] Array of control for fullsreen view
	  * @param {Object} [options.volume] Volume's options
	  * @param {Number} [options.volume.default=0.4] Default volume
	  * @param {Number} [options.volume.mutelimit=0.05] Delta when volume is muted
	  * @param {Number} [options.volume.step=0.05]
	  * @param {Object[]} [options.keybinding]
	  * Object with keybinding options, when key it's name of key binding, and value it's key binding settings
	  * @param {Number} [options.keybinding[].key] Code of key binding (for example 32 it's space)
	  * @param {String[]} [options.keybinding[].info] Array of keystrokes order
	  * @param {String} options.keybinding[].description] Description of key binding
	  * @param {Function} options.keybinding[].fn] Callback
	  */
		var Player = function Player(element, opts) {
			var C_BACKWARD = 'backward';
			var C_DIVIDER = 'divider';
			var C_DOWNLOAD = 'download';
			var C_FORWARD = 'forward';
			var C_FULLSCREEN = 'fullscreen';
			var C_PLAY = 'play';
			var C_RATE = 'rate';
			var C_SOURCE = 'source';
			var C_SUBTITLE = 'subtitle';
			var C_TIMELINE = 'timeline';
			var C_VOLUME = 'volume';
			var C_SECTION = "section";

			var options = this.options = $.extend(true, {}, {
				autoplay: false,
				height: 'auto',
				loop: false,
				muted: false,
				preload: 'metadata',
				poster: null,
				svgPath: '../dist/svg/svg-defs.svg',
				fullscreen: {
					hideTimelineTime: 7000
				},
				rate: {
					step: 0.25,
					min: 0.5,
					max: 4.0,
					'default': 1
				},
				playback: {
					step: {
						short: 5,
						medium: 30,
						long: 60
					}
				},
				controls: {
					common: [['play', 'volume', 'divider', 'timeline', 'divider', 'section', 'divider', 'fullscreen'], ['rate', 'divider', 'backward', 'divider', 'source', 'divider', 'subtitle', 'divider', 'download', 'divider', _ControlFactory.C_KEYBINDING_INFO]],
					fullscreen: [['play', 'volume', 'divider', 'timeline', 'divider', 'rate', 'divider', _ControlFactory.C_KEYBINDING_INFO, 'divider', 'backward', 'divider', 'source', 'divider', 'subtitle', 'divider', 'download', 'divider', 'fullscreen']]
				},
				volume: {
					default: 0.4,
					mutelimit: 0.05,
					step: 0.1
				},
				keyBinding: [{
					key: 32,
					info: ['Space'],
					description: 'Начать проигрывание / поставить на паузу',
					fn: function fn(video) {
						video.togglePlay();
					}
				}, {
					key: 37,
					info: ['←'],
					description: 'Перемотать на 30 секунд назад',
					fn: function fn(video) {
						video.currentTime -= options.playback.step.medium;
					}
				}, {
					key: 39,
					info: ['→'],
					description: 'Перемотать на 30 секунд вперёд',
					fn: function fn(video) {
						video.currentTime += options.playback.step.medium;
					}
				}, {
					shiftKey: true,
					info: ['Shift', '←'],
					description: 'Перемотать на 5 секунд назад',
					key: 37,
					fn: function fn(video) {
						video.currentTime -= options.playback.step.short;
					}
				}, {
					shiftKey: true,
					key: 39,
					info: ['Shift', '→'],
					description: 'Перемотать на 5 секунд вперед',
					fn: function fn(video) {
						video.currentTime += options.playback.step.short;
					}
				}, {
					key: 38,
					info: ['↑'],
					description: 'Увеличить громкость',
					fn: function fn(video) {
						video.volume += options.volume.step;
					}
				}, {
					key: 40,
					info: ['↓'],
					description: 'Уменьшить громкость',
					fn: function fn(video) {
						video.volume -= options.volume.step;
					}
				}]
			}, opts);

			/**
	   * This class manages FullScreen API.
	   * @TODO: add fullscreenerror handler.
	   */

			var Fullscreen = function () {
				function Fullscreen() {
					_classCallCheck(this, Fullscreen);

					this.player = player;
					this._collection = controls.fullscreen;
					this._hideTimeout = null;
					this.fullscreenEnabled = false;
				}

				/**
	    * @returns {boolean} Whether browser supports fullscreen mode.
	    */


				_createClass(Fullscreen, [{
					key: 'enabled',
					value: function enabled() {
						return !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen);
					}
				}, {
					key: 'init',
					value: function init() {
						var _this = this;

						if (!this.enabled()) {
							return null;
						}
						// Fullscreen change handlers.
						$(document).on({

							'fullscreenchange': function fullscreenchange(e) {
								_this.toggleElements(!!(document.fullScreen || document.fullscreenElement));
							},

							'webkitfullscreenchange': function webkitfullscreenchange(e) {
								_this.toggleElements(!!document.webkitIsFullScreen);
							},

							'mozfullscreenchange': function mozfullscreenchange(e) {
								_this.toggleElements(!!document.mozFullScreen);
							},

							'msfullscreenchange': function msfullscreenchange(e) {
								_this.toggleElements(!!document.msFullscreenElement);
							},

							'webkitbeginfullscreen': function webkitbeginfullscreen(e) {
								_this.toggleElements(true);
							},

							'webkitendfullscreen': function webkitendfullscreen(e) {
								_this.toggleElements(false);
							}
						});
					}

					/**
	     * @returns {boolean} Whether browser is in fullscreen mode.
	     */

				}, {
					key: 'is',
					value: function is() {
						return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement || this.fullscreenEnabled);
					}
				}, {
					key: 'showElements',
					value: function showElements() {
						var _this2 = this;

						this.player.trigger('fullscreenchange');
						container.addClass('fullscreen');
						controls.fullscreen.show();
						controls.common.hide();
						controls.mini.hide();

						clearTimeout(this._hideTimeout);
						this._hideTimeout = setTimeout(function () {
							_this2._collection.element.hide();
						}, options.fullscreen.hideTimelineTime);

						$(container).on({
							'mousemove.leplayer.fullscreen-hide-timeline': function mousemoveLeplayerFullscreenHideTimeline(e) {
								if (!$(e.currentTarget).hasClass('fullscreen')) return false;
								clearTimeout(_this2._hideTimeout);
								_this2._collection.element.show();
								_this2._hideTimeout = setTimeout(function () {
									_this2._collection.element.hide();
								}, options.fullscreen.hideTimelineTime);
							}
						});
					}
				}, {
					key: 'hideElements',
					value: function hideElements() {
						this.player.trigger('fullscreenchange');
						container.removeClass('fullscreen');
						controls.fullscreen.hide();
						controls.common.show();
						controls.mini.hide();
						clearTimeout(this._hideTimeout);
						$(container).off('.leplayer.fullscreen-hide-timeline');
					}
				}, {
					key: 'toggle',
					value: function toggle() {
						var containerEl = container[0];
						if (this.is()) {
							if (document.exitFullscreen) document.exitFullscreen();else if (document.mozCancelFullScreen) document.mozCancelFullScreen();else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();else if (document.msExitFullscreen) document.msExitFullscreen();else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
							this.hideElements(); // @TODO: make this only if fullscreen fired.
							this.fullscreenEnabled = false;
						} else {
							if (containerEl.requestFullScreen) containerEl.requestFullScreen();else if (containerEl.webkitRequestFullScreen) containerEl.webkitRequestFullScreen();else if (containerEl.mozRequestFullScreen) containerEl.mozRequestFullScreen();else if (containerEl.msExitFullscreen) containerEl.msRequestFullscreen();
							this.showElements(); // @TODO: make this only if fullscreen fired.
							this.fullscreEnabled = true;
						}
					}

					/**
	     * Update DOM structure according to current state.
	     */

				}, {
					key: 'toggleElements',
					value: function toggleElements(show) {
						if (!!show) {
							this.showElements();
						} else {
							this.hideElements();
						}
					}
				}]);

				return Fullscreen;
			}();

			var Video = function () {
				function Video(ctx) {
					_classCallCheck(this, Video);

					this.player = player;
					this._ctx = ctx;
					this._video = ctx[0];
					this.fullscreen = new Fullscreen();
					this.subtitles = [];
					this.bufferRanges = [];
					this.playbackRate = this._video.playbackRate;
				}

				_createClass(Video, [{
					key: 'init',
					value: function init() {
						var _this3 = this;

						var dfd = $.Deferred();
						this._initSubtitles();
						this._initVideo().done(function () {
							_this3.fullscreen.init();
							controls.init();
							_this3._initRate();
							_this3._initVolume();
							dfd.resolve();
						});
						this._initCustomEvents();
						this._initHtmlEvents();

						dfd.notify();
						return dfd.promise();
					}
				}, {
					key: 'togglePlay',
					value: function togglePlay() {
						/** In safari it doesn't work */
						// if (this._video.readyState < 2) {
						// 	overlay.hide();
						// 	_showNotification('Error!');
						// 	return;
						// }
						if (!this._video.played || this._video.paused) {
							this.play();
						} else {
							this.pause();
						}
					}
				}, {
					key: 'seek',
					value: function seek(time) {
						this._video.currentTime = time;
					}
				}, {
					key: 'play',
					value: function play() {
						overlay.hide();
						controls.play();
						return this._video.play();
					}
				}, {
					key: 'pause',
					value: function pause() {
						overlay.show();
						controls.pause();
						return this._video.pause();
					}
				}, {
					key: 'trigger',
					value: function trigger(eventName) {
						var _player$trigger;

						for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
							args[_key - 1] = arguments[_key];
						}

						(_player$trigger = this.player.trigger).call.apply(_player$trigger, [$(this._video), 'leplayer_' + eventName].concat(args));
						return this;
					}
				}, {
					key: 'on',
					value: function on(eventName) {
						var _$$on;

						for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
							args[_key2 - 1] = arguments[_key2];
						}

						(_$$on = $(this._video).on).call.apply(_$$on, [$(this._video), 'leplayer_' + eventName].concat(args));
						return this;
					}
				}, {
					key: '_initRate',
					value: function _initRate() {
						this.rate = _cookie2.default.get('rate', options.rate.default);
					}
				}, {
					key: '_initVolume',
					value: function _initVolume() {
						this.volume = _cookie2.default.get('volume', options.volume.default);
					}
				}, {
					key: '_initSubtitles',
					value: function _initSubtitles() {
						var _self = this;
						this._ctx.children('track[kind="subtitles"]').each(function () {
							var language = $(this).attr('srclang');
							var title = $(this).attr('label');
							var src = $(this).attr('src');
							if (title.length > 0 && src.length > 0) {
								_self.subtitles.push({
									title: title,
									src: src,
									language: language
								});
							}
						});
					}
				}, {
					key: '_initVideo',
					value: function _initVideo() {
						var _this4 = this;

						var dfd = $.Deferred();
						if (this._video.readyState > HTMLMediaElement.HAVE_NOTHING) {
							dfd.resolve();
							this._onLoadedMetaData();
							this._textTracksHack();
						} else {
							$(this._video).one('loadedmetadata', function (e) {
								dfd.resolve();
								_this4._textTracksHack();
							});
						}
						dfd.notify();
						return dfd.promise();
					}
				}, {
					key: '_textTracksHack',
					value: function _textTracksHack() {

						// This is generally for Firefox only
						// because it somehow resets track list
						// for video element after DOM manipulation.

						if (this._video.textTracks.length == 0 && this.subtitles.length > 0) {
							this._ctx.children('track[kind="subtitles"]').remove();
							for (var i in this.subtitles) {
								if (this.subtitles.hasOwnProperty(i)) {
									this._ctx.append($('<track/>').attr('label', this.subtitles[i].title).attr('src', this.subtitles[i].src).attr('srclang', this.subtitles[i].language).attr('id', this.subtitles[i].language).attr('kind', 'subtitles'));
								}
							}
						}
					}
				}, {
					key: '_onLoadedMetaData',
					value: function _onLoadedMetaData(e) {
						container.css('width', '100%').css('max-width', (options.width || this.width) + 'px');
						this.player.trigger('loadedmetadata', { video: this._video });
					}
				}, {
					key: '_initHtmlEvents',
					value: function _initHtmlEvents() {
						var _this5 = this;

						var mediaElement = $(this._video);
						var timerId = null;

						mediaElement.on({

							'timeupdate': function timeupdate(e) {
								controls.moveTimeMarker();
								_this5.player.trigger('timeupdate', { time: video.currentTime });
							},

							'loadedmetadata': this._onLoadedMetaData.bind(this),

							'ended': function ended() {
								_this5.pause();
								_this5.player.trigger('ended');
							},

							'dblclick': function dblclick() {
								clearTimeout(timerId);
								_this5.fullscreen.toggle();
							},

							'click': function click() {
								clearTimeout(timerId);
								timerId = setTimeout(function () {
									container.focus();
									_this5.togglePlay();
								}, 300);
							},

							'volumechange': function volumechange(e) {
								_this5.player.trigger('volumechange', { volume: _this5.volume });
							},

							'canplay': function canplay(e) {
								loader.hide();
								_this5.player.trigger('canplay');
							},

							'waiting': function waiting(e) {
								loader.show();
								_this5.player.trigger('waiting');
							}

						});
					}
				}, {
					key: '_initCustomEvents',
					value: function _initCustomEvents() {
						var mediaElement = $(this._video);
					}
				}, {
					key: 'currentTime',
					get: function get() {
						return this._video.currentTime;
					},
					set: function set(value) {
						if (value > this.duration) {
							this._video.currentTime = this.duration;
						} else if (value < 0) {
							this._video.currentTime = 0;
						} else {
							this._video.currentTime = value;
						}
					}
				}, {
					key: 'duration',
					get: function get() {
						return this._video.duration;
					}
				}, {
					key: 'height',
					get: function get() {
						return this._video.clientHeight;
					}
				}, {
					key: 'rate',
					get: function get() {
						return this._video.playbackRate;
					},
					set: function set(value) {
						if (value <= options.rate.max && value >= options.rate.min) {
							this._video.playbackRate = value;
						}
						/** TODO: Chanche controls.rate in event handler */
						controls.rate = this._video.playbackRate;
					}
				}, {
					key: 'width',
					get: function get() {
						return this._video.clientWidth;
					}
				}, {
					key: 'source',
					set: function set(value) {
						var time = this._video.currentTime;
						var rate = this._video.playbackRate;
						var stop = !this._video.played || this._video.paused;
						this._ctx.attr('src', value);
						this._video = this._ctx[0];
						this._video.playbackRate = rate;
						this._video.currentTime = time;
						if (stop) {
							this.pause();
						} else {
							this.play();
						}

						// @TODO make this right way
						//setTimeout(() => {
						//controls.totalTime = secondsToTime(this._video.duration);
						//}, 100);
					}
				}, {
					key: 'track',
					set: function set(value) {
						for (var i = 0; i < this._video.textTracks.length; i++) {
							if (this._video.textTracks[i].language == value) this._video.textTracks[i].mode = 'showing';else this._video.textTracks[i].mode = 'hidden';
						}
					}
				}, {
					key: 'volume',
					get: function get() {
						return this._video.volume;
					},
					set: function set(value) {
						if (value > 1) {
							this._video.volume = 1;
						} else if (value < options.volume.mutelimit) {
							this._video.volume = 0;
						} else {
							this._video.volume = value;
						}
						this._video.mute = value < options.volume.mutelimit;
					}
				}, {
					key: 'buffered',
					get: function get() {
						return this._video.buffered;
					}
				}, {
					key: 'loaded',
					get: function get() {
						var loaded = [];
						var media = this._video;
						/** FF4+, Chrome */
						if (media.buffered && media.buffered.end && media.duration > 0) {
							for (var i = 0; i < media.buffered.length; i++) {
								var start = media.buffered.start(i) / media.duration;
								var end = media.buffered.end(i) / media.duration;
								var segment = [start, end];
								loaded.push(segment);
							}
						}
						/** Safari 5, Webkit head, FF3.6, Chrome 6, IE 7/8 */
						else if (media.bytesTotal != null && media.bytesTotal > 0 && media.bufferedBytes != null) {
								loaded.push([0, media.bufferedBytes / media.bytesTotal]);
							}
						return loaded;
					}
				}, {
					key: 'loadedSize',
					get: function get() {
						var START = 0;
						var END = 1;
						var sum = 0;
						this.loaded.forEach(function (item) {
							sum += item[END] - item[START];
						});
						return sum;
					}
				}]);

				return Video;
			}();

			var ControlCollection = function () {
				function ControlCollection(name, active) {
					_classCallCheck(this, ControlCollection);

					this.items = {};
					this.active = active || false;
					this.name = name;
				}

				_createClass(ControlCollection, [{
					key: 'add',
					value: function add(name) {
						if (name == C_DIVIDER) {
							return (0, _ControlFactory2.default)(player, name);
						} else {
							this.items[name] = (0, _ControlFactory2.default)(player, name);
							return this.items[name].element;
						}
					}
				}, {
					key: 'has',
					value: function has(name) {
						return _typeof(this.items[name]) == 'object';
					}
				}, {
					key: 'hide',
					value: function hide() {
						this.element.hide();
					}
				}, {
					key: 'init',
					value: function init() {
						this.element = container.find('.controls-' + this.name);
						for (var i in this.items) {
							if (!this.items.hasOwnProperty(i)) continue;
							$.isFunction(this.items[i].init) && this.items[i].init();
						}
						this.initTimeline();
						//this.totalTime = secondsToTime(video.duration);
						this.download = sources[0].src;
					}
				}, {
					key: 'initTimeline',
					value: function initTimeline() {
						if (this.has(C_TIMELINE)) {
							if (this.items.timeline.element.width() < 20) this.items.timeline.element.hide();
						}
					}
				}, {
					key: 'moveTimeMarker',
					value: function moveTimeMarker() {
						if (this.has(C_TIMELINE)) this.items.timeline.move();
					}
				}, {
					key: 'pause',
					value: function pause() {
						if (this.has(C_PLAY)) this.items.play.pause();
					}
				}, {
					key: 'play',
					value: function play() {
						if (this.has(C_PLAY)) this.items.play.play();
					}
				}, {
					key: 'show',
					value: function show() {
						container.find('.controls-' + this.name).show();
					}
				}, {
					key: 'download',
					set: function set(value) {
						if (this.has(C_DOWNLOAD)) {
							this.items.download.link = value;
						}
					}
				}, {
					key: 'rate',
					set: function set(value) {
						if (this.has(C_RATE)) {
							this.items.rate.value = value;
						}
					}
				}, {
					key: 'source',
					set: function set(value) {
						if (this.has(C_SOURCE)) {
							this.items.source.set(value);
						}
					}
				}, {
					key: 'totalTime',
					set: function set(value) {
						if (this.has(C_TIMELINE)) this.items.timeline.totalTime.text = value;
					}
				}, {
					key: 'volume',
					set: function set(value) {
						if (this.has(C_VOLUME)) this.items.volume.value = value;
					}
				}, {
					key: 'disable',
					set: function set(value) {
						for (var i in this.items) {
							if (!this.items.hasOwnProperty(i)) continue;
							this.items[i].disable = value;
						}
					}
				}]);

				return ControlCollection;
			}();

			var Controls = function () {
				function Controls() {
					_classCallCheck(this, Controls);

					this.collections = {
						common: new ControlCollection('common'),
						mini: new ControlCollection('mini'),
						fullscreen: new ControlCollection('fullscreen')
					};
					this.collections.common.active = true;
				}

				_createClass(Controls, [{
					key: 'has',
					value: function has(name) {
						return _typeof(this.collections[name]) == 'object';
					}
				}, {
					key: 'init',
					value: function init() {
						for (var i in this.collections) {
							this.collections[i].init();
						}
						this.collections.common.show();
						this.collections.mini.hide();
						this.collections.fullscreen.hide();
					}
				}, {
					key: 'moveTimeMarker',
					value: function moveTimeMarker() {
						for (var i in this.collections) {
							this.collections[i].moveTimeMarker();
						}
					}
				}, {
					key: 'pause',
					value: function pause() {
						for (var i in this.collections) {
							this.collections[i].pause();
						}
					}
				}, {
					key: 'play',
					value: function play() {
						for (var i in this.collections) {
							this.collections[i].play();
						}
					}
				}, {
					key: 'common',
					get: function get() {
						return this.collections.common;
					}
				}, {
					key: 'fullscreen',
					get: function get() {
						return this.collections.fullscreen;
					}
				}, {
					key: 'mini',
					get: function get() {
						return this.collections.mini;
					}
				}, {
					key: 'download',
					set: function set(value) {
						for (var i in this.collections) {
							this.collections[i].download = value;
						}
					}
				}, {
					key: 'rate',
					set: function set(value) {
						_cookie2.default.set('rate', value);
						for (var i in this.collections) {
							this.collections[i].rate = value;
						}
					}
				}, {
					key: 'source',
					set: function set(value) {
						for (var i in this.collections) {
							this.collections[i].source = value;
						}
					}
				}, {
					key: 'totalTime',
					set: function set(value) {
						for (var i in this.collections) {
							this.collections[i].totalTime = value;
						}
					}
				}, {
					key: 'volume',
					set: function set(value) {
						for (var i in this.collections) {
							this.collections[i].volume = value;
						}
						_cookie2.default.set('volume', value);
					}
				}, {
					key: 'disable',
					set: function set(value) {
						for (var i in this.collections) {
							this.collections[i].disable = value;
						}
					}
				}]);

				return Controls;
			}();

			var Sections = function () {
				function Sections(items) {
					var _this6 = this;

					_classCallCheck(this, Sections);

					this.player = player;

					this.items = items;
					for (var i = 0; i < this.items.length; i++) {
						var endSection = void 0;
						if (i < this.items.length - 1) {
							endSection = this.items[i + 1].begin;
						} else {
							endSection = video.duration;
						}
						this.items[i].end = endSection;
					}

					this.element = $('<div />').addClass('leplayer-sections');
					this.element.append(this._createSections(items));
					this.element.find('.leplayer-section').on('click', this.onSectionClick.bind(this));

					this._activeSection = this.getSectionByIndex(0);
					this.setActiveByIndex(0);

					this.player.trigger('sectionsinit', { items: this.items });

					this.player.on('section_toggle', function (e) {
						if (_this6.element.hasClass('leplayer-sections--hidden')) {
							_this6.element.removeClass('leplayer-sections--hidden');
						} else {
							_this6.element.addClass('leplayer-sections--hidden');
						}
					});

					this.player.on('timeupdate', this.onTimeUpdate.bind(this));
				}

				_createClass(Sections, [{
					key: '_createSections',
					value: function _createSections(items) {
						var result = '';
						items.forEach(function (section, index) {
							var item = '\n\t\t\t\t\t\t<div class="leplayer-section ' + (!index ? 'leplayer-section--active' : '') + '"\n\t\t\t\t\t\t\tdata-time="' + section.begin + '" data-index="' + index + '">\n\t\t\t\t\t\t\t<div class="leplayer-section-time">' + secondsToTime(section.begin) + '</div>\n\t\t\t\t\t\t\t<div class="leplayer-section-info">\n\t\t\t\t\t\t\t\t<div class="leplayer-section-title">' + section.title + '</div>\n\t\t\t\t\t\t\t\t<div class="leplayer-section-description">' + section.description + '</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t';
							result += item;
						});
						return result;
					}
				}, {
					key: 'onSectionClick',
					value: function onSectionClick(e) {
						var section = $(e.target).closest('.leplayer-section');
						video.currentTime = section.attr('data-time');
					}
				}, {
					key: 'setActiveByIndex',
					value: function setActiveByIndex(index) {
						if (this._activeSection.attr('data-index') == index) {
							return;
						}
						this._activeSection.removeClass('leplayer-section--active');

						this._activeSection = this.getSectionByIndex(index);
						this._activeSection.addClass('leplayer-section--active');
						this.element.animate({
							scrollTop: this._activeSection.position().top
						}, 1000);
					}
				}, {
					key: 'getSectionByIndex',
					value: function getSectionByIndex(index) {
						return this.element.find('.leplayer-section[data-index="' + index + '"]');
					}
				}, {
					key: 'onTimeUpdate',
					value: function onTimeUpdate(e, data) {
						var currentTime = data.time;

						for (var i = 0; i < this.items.length; i++) {
							var section = this.items[i];
							if (currentTime <= section.end) {
								this.setActiveByIndex(i);
								break;
							}
						}
					}
				}]);

				return Sections;
			}();

			var sources = this.sources = [];
			var subtitles = [];
			var volume = options.volume.default;
			var controls = this.controls = new Controls();
			var player = this;
			var video = null;

			/**
	   * DOM container to hold video and all other stuff.
	   * @type object
	   */
			var container = null;
			var overlay = null;
			var loader = null;
			var sectionContainer = null;
			var videoContainer = null;

			var _createNotification = function _createNotification(opt) {
				var notification = void 0,
				    closeButton = void 0;
				notification = $('<div />').addClass('leplayer-notification').append(opt.text);
				return notification;
			};

			var _showNotification = function _showNotification(msg) {
				var notification = _createNotification({ text: msg });
				notification = $('<div />').addClass('leplayer-notification').append(msg);
				container.append(notification);
			};

			var init = function init() {
				// Check if element is correctly selected.
				if (element.prop('tagName').toLowerCase() != 'video') {
					console.warn('Incorrect element selected.');
					return this;
				}

				initOptions();
				// Set source.
				// @TODO move this to Video class
				element.children('source').each(function () {
					var src = $(this).attr('src');
					if (src) {
						sources.push({
							src: src,
							title: $(this).attr('title') || 'default'
						});
					}
				});
				if (sources.length == 0) {
					var src = element.attr('src');
					if (src) {
						sources.push({
							src: src,
							title: $(this).attr('title') || 'default'
						});
					}
				}
				if (sources.length == 0) {
					console.warn('No sources found.');
					return this;
				}
				video = player.video = new Video(element);

				/** TODO: Use promise to async run this */
				initDom();
				initControls();
				initHotKeys();
				video.init().done(function () {
					initSections();
					player.trigger('inited');
				});
			};

			var initControls = function initControls() {
				for (var name in options.controls) {
					if (!controls.has(name)) continue;
					for (var rowIndex in options.controls[name]) {
						var row = options.controls[name][rowIndex],
						    hasTimeline = false,
						    rowElement = $('<div />').addClass('leplayer-controls controls-' + name);

						for (var i in row) {
							var controlName = row[i];

							if (controlName == C_DIVIDER || !controls.collections[name].has(controlName)) {
								// Create control only if divider or does not exist yet.
								var c = controls.collections[name].add(controlName);
								if (c != null) {
									rowElement.append(c);
									if (controlName == C_TIMELINE) hasTimeline = true;
								} else console.warn('Cannot create ' + controlName + ' control for collection ' + name + '.');
							}
						}

						if (!hasTimeline) rowElement.css('width', '1px');

						rowElement.find('.divider + .divider').remove();

						container.append(rowElement);
					}
				}
			};

			var initSections = function initSections() {
				options.dataUrl && player.getData().done(function (data) {
					var section = new Sections(data.sections);

					if (sectionContainer) {
						sectionContainer.append(section.element);
					} else {
						videoContainer.append(section.element);
					}
				});
			};

			var initDom = function initDom() {
				overlay = $('<div />').addClass('play-overlay').append(new _Icon2.default(player, { iconName: 'play' }).element);
				loader = $('<div />').addClass('leplayer-loader-container').append(new _Icon2.default(player, {
					iconName: 'refresh',
					className: 'leplayer-icon-spin'
				}).element).hide();
				videoContainer = $('<div />').addClass('leplayer-video').append(overlay).append(loader);
				container = $('<div />').addClass('leplayer-container').append(videoContainer).attr('tabindex', 0)
				//.css('width', element.width() + 'px');
				.css('width', '100%').css('max-width', (options.width || video.width) + 'px');

				if (options.sectionContainer) {
					sectionContainer = $(options.sectionContainer).addClass('leplayer-section-container');
				}

				element.before(container);
				videoContainer.append(element);
				overlay.on({
					'click': function click(e) {
						element.trigger('click');
					},
					'dblclick': function dblclick(e) {
						element.trigger('dblclick');
					}
				});
			};

			var initHotKeys = function initHotKeys() {

				var isKeyBinding = function isKeyBinding(e, binding) {
					return (e.which === binding.key || e.key === binding.key) && !!binding.shiftKey == e.shiftKey && !!binding.ctrlKey == e.ctrlKey;
				};

				$(container).bind('keydown.leplayer.hotkey', function (e) {
					var _isFocused = isFocused();
					if (_isFocused) {
						options.keyBinding.forEach(function (binding) {
							if (isKeyBinding(e, binding)) {
								e.preventDefault();
								binding.fn(video);
								return false;
							}
						});
					}
				});
			};

			var initOptions = function initOptions() {
				var height = void 0,
				    width = void 0,
				    poster = void 0,
				    attrs = void 0,
				    preload = void 0;
				element.removeAttr('controls');

				height = element.attr('height');
				if (height) {
					options.height = height + 'px';
					element.removeAttr('height');
				}
				//element.css('height', options.height);

				width = element.attr('width');
				if (width) {
					options.width = width + 'px';
					element.removeAttr('width');
				}
				//element.css('width', options.width);

				poster = element.attr('poster');
				if (poster) options.poster = poster;else if (options.poster) element.attr('poster', options.poster);

				attrs = ['autoplay', 'loop', 'muted'];
				attrs.forEach(function (item) {
					var a = element.attr(item);
					if (a) {
						options[item] = true;
					} else if (options[item]) {
						element.attr(item, '');
					} else {
						element.removeAttr(item);
					}
					element.prop(item, options[item]);
				});

				preload = element.attr('preload');
				if (preload) {
					preload = preload.toLowerCase();
					if (preload == 'none' || preload == 'metadata') options.preload = preload;else options.preload = 'auto';
				}

				if (options.sources) {
					if (Array.isArray(options.sources)) {
						options.sources.forEach(function (item) {
							var source = $('<source />');
							if (typeof item === 'string') {
								source.attr('src', item);
							} else {
								source.attr('src', item.src);
							}
							source.attr('title', item.title || 'default');
							element.append(source);
						});
					} else if (typeof options.sources === 'string') {
						element.attr('src', options.sources);
					}
				}
				element.attr('preload', options.preload);
			};

			var secondsToTime = function secondsToTime(seconds) {
				var h = Math.floor(seconds / 3600);
				var m = Math.floor(seconds % 3600 / 60);
				var s = Math.floor(seconds % 3600 % 60);
				var out = '';
				if (h > 0) out = h + ':';
				if (m < 10) out += '0';
				out += m + ':';
				if (s < 10) out += '0';
				out += s;
				return out;
			};

			var isFocused = function isFocused() {
				var focused = $(container).find(':focus');
				return focused.length > 0 || $(container).is(':focus');
			};

			this.getData = function () {
				return $.ajax({
					url: options.dataUrl,
					method: 'GET'
				}).promise();
			};

			this.trigger = function (eventName) {
				var _$$trigger;

				for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
					args[_key3 - 1] = arguments[_key3];
				}

				(_$$trigger = $(element).trigger).call.apply(_$$trigger, [$(element), 'leplayer_' + eventName].concat(args));
			};

			this.on = function (eventName) {
				var _$$on2;

				for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
					args[_key4 - 1] = arguments[_key4];
				}

				(_$$on2 = $(element).on).call.apply(_$$on2, [$(element), 'leplayer_' + eventName].concat(args));
			};
			init();

			return this;
		};

		window.$.fn.lePlayer = function (options) {
			return this.each(function () {
				return new Player($(this), options);
			});
		};
	})(jQuery);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file Control.js
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _Component2 = __webpack_require__(3);

	var _Component3 = _interopRequireDefault(_Component2);

	var _Icon = __webpack_require__(4);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @class Control
	 * @param {Player} player Main player
	 * @param {Object} [options] Control's options
	 * @param {String} [options.iconName] Name of control's icon. If empty, control will not have a icon
	 * @param {String} [options.className]
	 * @param {String} [options.title] Contorl's tooltip, title attr
	 * @param {Boolean} [options.disable=false]
	 * @property {Icon} icon Icon in control, if it is exist
	 * @extends Component
	 */

	var Control = function (_Component) {
		_inherits(Control, _Component);

		function Control(player, options) {
			_classCallCheck(this, Control);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Control).call(this, player, options));

			_this.disable = true;

			_this.player.on('inited', function (e) {
				_this.disable = options.disable || false;
			});

			_this.element.on({
				'click': _this._onClick.bind(_this),
				'leplayer_click': _this.onClick.bind(_this)
			});

			if (_this.options.iconName) {
				_this.icon.element.on({
					'click': _this._onIconClick.bind(_this),
					'leplayer_click': _this.onIconClick.bind(_this)
				});
			}

			_this.player.on('inited', _this.onPlayerInited.bind(_this));
			return _this;
		}

		/**
	  * @override
	  */


		_createClass(Control, [{
			key: 'createElement',
			value: function createElement() {
				if (this.options.iconName) {
					this.icon = new _Icon2.default(this.player, {
						iconName: this.options.iconName
					});
				}
				var attrs = {
					role: 'button',
					title: this.options.title
				};
				this.element = (0, _jquery2.default)('<div />').addClass(this.buildCSSClass()).append(this.icon && this.icon.element).attr(attrs);

				return this.element;
			}

			/**
	   * @override
	   */

		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return 'control ' + this.options.className + ' ' + _get(Object.getPrototypeOf(Control.prototype), 'buildCSSClass', this).call(this);
			}
		}, {
			key: '_onClick',
			value: function _onClick(e) {
				if (this.disable) {
					return false;
				}
				this.element.trigger('leplayer_click');
			}
		}, {
			key: '_onIconClick',
			value: function _onIconClick(e) {
				e.stopPropagation();
				e.preventDefault();
				this.icon.element.trigger('leplayer_click');
			}
			/**
	   *
	   * On click event handler
	   * @abstact
	   */

		}, {
			key: 'onClick',
			value: function onClick(e) {
				e.preventDefault();
			}

			/**
	   * On icon click event handler
	   * @abstact
	   */

		}, {
			key: 'onIconClick',
			value: function onIconClick(e) {
				e.preventDefault();
			}
		}, {
			key: 'onPlayerInited',
			value: function onPlayerInited(e, data) {}
		}, {
			key: 'disable',
			set: function set(value) {
				this._disable = value;
				this.element.toggleClass('disabled', value);
			},
			get: function get() {
				return this._disable;
			}
		}]);

		return Control;
	}(_Component3.default);

	exports.default = Control;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = $;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file Component.js
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Player component - Base class for all UI
	 *
	 * @param {Player} player Main player
	 * @param {Object} [options] Options of component
	 * @param {jQuery} [options.element] Элемент на котором можно иницилизовать класс.
	 * @property {Object} options
	 * @property {jQuery} element
	 * @class Component
	 */

	var Component = function () {
		function Component(player, options) {
			_classCallCheck(this, Component);

			options = this.options = _jquery2.default.extend({}, this.options, options);
			this.player = player;

			if (options.element) {
				this.element = options.element;
			} else {
				this.createElement();
			}
		}

		/**
	  * @abstract
	  */


		_createClass(Component, [{
			key: 'createElement',
			value: function createElement() {
				return '';
			}

			/**
	   * @abstract
	   */

		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return '';
			}
		}]);

		return Component;
	}();

	exports.default = Component;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file Icon.js
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _Component2 = __webpack_require__(3);

	var _Component3 = _interopRequireDefault(_Component2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @param {Player} player Main player
	 * @param {Object} [options] Icon's options
	 * @param {String} [options.iconName=''] Icon's name. If use svgsprite icons, iconName it's id in sprite
	 * @class Icon
	 * @extends Component
	 */

	var Icon = function (_Component) {
		_inherits(Icon, _Component);

		function Icon(player) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, Icon);

			options = _jquery2.default.extend({}, {
				className: '',
				iconName: ''
			}, options);
			return _possibleConstructorReturn(this, Object.getPrototypeOf(Icon).call(this, player, options));
		}

		/**
	  * @override
	  */


		_createClass(Icon, [{
			key: 'createElement',
			value: function createElement() {
				this._useTag = document.createElementNS('http://www.w3.org/2000/svg', 'use');
				this._svgTag = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

				this.iconName = this._iconName = this.options.iconName;
				this._svgTag.appendChild(this._useTag);
				this.element = (0, _jquery2.default)('<div />').addClass(this.buildCSSClass()).attr('title', this.options.title).append((0, _jquery2.default)(this._svgTag));
				return this.element;
			}

			/**
	   * @override
	   */

		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return _get(Object.getPrototypeOf(Icon.prototype), 'buildCSSClass', this).call(this) + ' leplayer-icon ' + this.options.className;
			}

			/**
	   * Setter of iconName field
	   * @param {String} iconName
	   */

		}, {
			key: 'iconName',
			set: function set(iconName) {
				var _useTag, _useTag2;

				var attrNS = ['http://www.w3.org/1999/xlink', 'href'];
				(_useTag = this._useTag).removeAttributeNS.apply(_useTag, attrNS.concat([this.player.options.svgPath + '#leplayer-icon-' + this.iconName]));
				(_useTag2 = this._useTag).setAttributeNS.apply(_useTag2, attrNS.concat([this.player.options.svgPath + '#leplayer-icon-' + iconName]));
				this._iconName = iconName;
			}

			/**
	   * Getter of iconName field
	   * @return {String} Icon's name
	   */
			,
			get: function get() {
				return this._iconName;
			}
		}]);

		return Icon;
	}(_Component3.default);

	exports.default = Icon;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file control-factory.js
	 *
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.C_KEYBINDING_INFO = exports.C_SECTION = exports.C_VOLUME = exports.C_TIMELINE = exports.C_SUBTITLE = exports.C_SOURCE = exports.C_RATE = exports.C_PLAY = exports.C_FULLSCREEN = exports.C_FORWARD = exports.C_DOWNLOAD = exports.C_DIVIDER = exports.C_BACKWARD = undefined;
	exports.default = controlFactory;

	var _PlayControl = __webpack_require__(6);

	var _PlayControl2 = _interopRequireDefault(_PlayControl);

	var _VolumeControl = __webpack_require__(7);

	var _VolumeControl2 = _interopRequireDefault(_VolumeControl);

	var _TimelineControl = __webpack_require__(10);

	var _TimelineControl2 = _interopRequireDefault(_TimelineControl);

	var _SectionControl = __webpack_require__(13);

	var _SectionControl2 = _interopRequireDefault(_SectionControl);

	var _FullscreenControl = __webpack_require__(15);

	var _FullscreenControl2 = _interopRequireDefault(_FullscreenControl);

	var _RateControl = __webpack_require__(16);

	var _RateControl2 = _interopRequireDefault(_RateControl);

	var _BackwardControl = __webpack_require__(17);

	var _BackwardControl2 = _interopRequireDefault(_BackwardControl);

	var _SourceControl = __webpack_require__(18);

	var _SourceControl2 = _interopRequireDefault(_SourceControl);

	var _SubtitleControl = __webpack_require__(20);

	var _SubtitleControl2 = _interopRequireDefault(_SubtitleControl);

	var _DownloadControl = __webpack_require__(21);

	var _DownloadControl2 = _interopRequireDefault(_DownloadControl);

	var _KeybindingInfoControl = __webpack_require__(22);

	var _KeybindingInfoControl2 = _interopRequireDefault(_KeybindingInfoControl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var C_BACKWARD = exports.C_BACKWARD = 'backward';
	var C_DIVIDER = exports.C_DIVIDER = 'divider';
	var C_DOWNLOAD = exports.C_DOWNLOAD = 'download';
	var C_FORWARD = exports.C_FORWARD = 'forward';
	var C_FULLSCREEN = exports.C_FULLSCREEN = 'fullscreen';
	var C_PLAY = exports.C_PLAY = 'play';
	var C_RATE = exports.C_RATE = 'rate';
	var C_SOURCE = exports.C_SOURCE = 'source';
	var C_SUBTITLE = exports.C_SUBTITLE = 'subtitle';
	var C_TIMELINE = exports.C_TIMELINE = 'timeline';
	var C_VOLUME = exports.C_VOLUME = 'volume';
	var C_SECTION = exports.C_SECTION = 'section';
	var C_KEYBINDING_INFO = exports.C_KEYBINDING_INFO = 'keybinding info';

	function controlFactory(player, name) {
		switch (name) {
			case C_BACKWARD:
				return new _BackwardControl2.default(player);

			case C_DIVIDER:
				return '<div class="divider"></div>';

			case C_DOWNLOAD:
				return new _DownloadControl2.default(player);

			case C_FORWARD:
				return new ForwardControl(player);

			case C_FULLSCREEN:
				return new _FullscreenControl2.default(player);

			case C_PLAY:
				return new _PlayControl2.default(player);

			case C_RATE:
				return new _RateControl2.default(player);

			case C_SOURCE:
				return new _SourceControl2.default(player);

			case C_SUBTITLE:
				return new _SubtitleControl2.default(player);

			case C_TIMELINE:
				return new _TimelineControl2.default(player);

			case C_VOLUME:
				return new _VolumeControl2.default(player);

			case C_SECTION:
				return new _SectionControl2.default(player);

			case C_KEYBINDING_INFO:
				return new _KeybindingInfoControl2.default(player);

			default:
				return null;
		}
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file PlayControl.js
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _Control2 = __webpack_require__(1);

	var _Control3 = _interopRequireDefault(_Control2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @class PlayControl
	 * @param {Player} player Main player
	 * @extends Control
	 */

	var PlayControl = function (_Control) {
		_inherits(PlayControl, _Control);

		function PlayControl(player) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, PlayControl);

			options = _jquery2.default.extend({}, {
				iconName: 'play',
				title: 'Воспроизвести видео',
				className: 'play'
			}, options);
			return _possibleConstructorReturn(this, Object.getPrototypeOf(PlayControl).call(this, player, options));
		}

		/**
	  * Pause the video
	  */


		_createClass(PlayControl, [{
			key: 'pause',
			value: function pause() {
				this.icon.iconName = 'play';
				this.element.attr('title', this.options.title);
			}

			/**
	   * Play the video
	   */

		}, {
			key: 'play',
			value: function play() {
				this.icon.iconName = 'pause';
				this.element.attr('title', 'Поставить на паузу');
			}

			/**
	   * @override
	   */

		}, {
			key: 'onClick',
			value: function onClick(e) {
				//super.onClick(e);
				this.player.video.togglePlay();
			}
		}]);

		return PlayControl;
	}(_Control3.default);

	exports.default = PlayControl;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file VolumeControl.js
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _ControlDropdown2 = __webpack_require__(8);

	var _ControlDropdown3 = _interopRequireDefault(_ControlDropdown2);

	var _Icon = __webpack_require__(4);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _cookie = __webpack_require__(9);

	var _cookie2 = _interopRequireDefault(_cookie);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @param {Player} player Main player
	 * @class VolumeControl
	 * @extends ControlDropdown
	 */

	var VolumeControl = function (_ControlDropdown) {
		_inherits(VolumeControl, _ControlDropdown);

		function VolumeControl(player) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, VolumeControl);

			options = _jquery2.default.extend({}, {
				iconName: 'volume-down',
				className: 'volume-control'
			}, options);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VolumeControl).call(this, player, options));

			_this.player.on('volumechange', function (e, data) {
				_this.value = data.volume;
			});
			return _this;
		}

		_createClass(VolumeControl, [{
			key: 'createElement',
			value: function createElement() {
				var _this2 = this;

				_get(Object.getPrototypeOf(VolumeControl.prototype), 'createElement', this).call(this);
				var drag = false;

				this.marker = (0, _jquery2.default)('<div/>').addClass('volume-marker');

				this.active = (0, _jquery2.default)('<div/>').addClass('volume-active');

				this.line = (0, _jquery2.default)('<div/>').addClass('volume-line').append(this.active).append(this.marker).on('click', function (e) {
					if (drag) return;
					var p = _this2.getPosition(e.pageY);
					if (p >= 0 && p <= 1) {
						_this2.player.video.volume = 1 - p;
					}
				});

				this.dropdownContent.addClass('volume-slider').append(this.line);

				this.icon.element.attr('title', 'Отключить звук');

				this.marker.on('mousedown', function (e) {
					if (e.which != 1) return;
					drag = true;
				});

				(0, _jquery2.default)(document).on({
					'mousemove': function mousemove(e) {
						if (!drag) return;
						var p = _this2.getPosition(e.pageY);
						if (p >= 0 && p <= 1) {
							_this2.player.video.volume = 1 - p;
						}
					},

					'mouseup': function mouseup(e) {
						drag = false;
					}
				});
				return this.element;
			}
		}, {
			key: 'toggleMuted',
			value: function toggleMuted() {
				if (this.player.video.muted == true) {
					this.value = _cookie2.default.get('volume', options.volume.default);
				} else {
					this.value = 0;
				}
			}
		}, {
			key: 'getPosition',
			value: function getPosition(y) {
				return (y - this.line.offset().top) / this.line.height();
			}
		}, {
			key: 'onIconClick',
			value: function onIconClick(e) {
				_get(Object.getPrototypeOf(VolumeControl.prototype), 'onIconClick', this).call(this, e);
				this.toggleMuted();
			}
		}, {
			key: 'value',
			set: function set(value) {
				if (value < this.player.options.volume.mutelimit) {
					this.icon.iconName = 'volume-off';
				} else if (value < 0.5) {
					this.icon.iconName = 'volume-down';
				} else {
					this.icon.iconName = 'volume-up';
				}

				var p = Math.round(value * 100).toString() + '%';
				this.active.css('height', p);
				this.marker.css('bottom', p);
			}
		}]);

		return VolumeControl;
	}(_ControlDropdown3.default);

	exports.default = VolumeControl;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file ControlDropdown.js
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _Control2 = __webpack_require__(1);

	var _Control3 = _interopRequireDefault(_Control2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @class ControlDropdown
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @property {jQuery} dropdownContent Content of popup
	 * @extends Control
	 */

	var ControlDropdown = function (_Control) {
		_inherits(ControlDropdown, _Control);

		function ControlDropdown(player) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, ControlDropdown);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(ControlDropdown).call(this, player, options));
		}

		/**
	  * @override
	  */


		_createClass(ControlDropdown, [{
			key: 'createElement',
			value: function createElement() {
				_get(Object.getPrototypeOf(ControlDropdown.prototype), 'createElement', this).call(this);
				this.dropdownContent = (0, _jquery2.default)('<div />').addClass('control-dropdown__content');
				this.element.append(this.dropdownContent);
			}

			/**
	   * @override
	   */

		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return 'control-dropdown ' + _get(Object.getPrototypeOf(ControlDropdown.prototype), 'buildCSSClass', this).call(this);
			}
		}]);

		return ControlDropdown;
	}(_Control3.default);

	exports.default = ControlDropdown;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	/**
	 * @file cookie-control.js
	 *
	 * @clas Cookie
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Cookie = function () {
		function Cookie() {
			_classCallCheck(this, Cookie);
		}

		_createClass(Cookie, null, [{
			key: 'get',

			/**
	   * @public
	   *
	   * @param {String} name Name of cookie
	   * @param {String} [dflt] Return default value if this field is empty
	   *
	   */
			value: function get(name, dflt) {
				var cookies = document.cookie.split(';');
				for (var i in cookies) {
					var d = cookies[i].trim().split('=');
					if (d[0] == 'leplayer_' + name) return d[1];
				}
				return dflt;
			}
		}, {
			key: 'set',


			/**
	   * @public
	   *
	   * @param {String} name Key
	   * @param {String} value Value
	   */
			value: function set(name, value) {
				var d = new Date();
				d.setDate(d.year + 1);
				document.cookie = 'leplayer_' + name + '=' + value + ';expires=' + d.toString();
			}
		}]);

		return Cookie;
	}();

	exports.default = Cookie;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file TimelineControl.js
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _Control2 = __webpack_require__(1);

	var _Control3 = _interopRequireDefault(_Control2);

	var _ControlText = __webpack_require__(11);

	var _ControlText2 = _interopRequireDefault(_ControlText);

	var _time = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @param {Player} player Main player
	 * @class TimelineControl
	 * @property {ControlText} currentTime Current time's text
	 * @property {ControlText} totalTime Total time
	 * @property {jQuery} line
	 * @extends Control
	 */

	var TimelineControl = function (_Control) {
		_inherits(TimelineControl, _Control);

		function TimelineControl(player) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, TimelineControl);

			options = _jquery2.default.extend({}, {
				className: 'timeline timeline-container'
			}, options);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TimelineControl).call(this, player, options));

			_this.player.on('sectionsinit', _this.onSectionsInit.bind(_this));
			_this.player.on('loadedmetadata', _this.onLoadedMetaData.bind(_this));
			//this._initWatchBuffer()
			return _this;
		}

		_createClass(TimelineControl, [{
			key: 'createElement',
			value: function createElement() {
				var _this2 = this;

				_get(Object.getPrototypeOf(TimelineControl.prototype), 'createElement', this).call(this);
				var video = this.player.video;
				var duration = video.duration;

				this.drag = false;

				this.currentTime = new _ControlText2.default(this.player, { className: 'time-current' });
				this.totalTime = new _ControlText2.default(this.player, { className: 'time-total' });

				this.marker = (0, _jquery2.default)('<div />').addClass('time-marker');

				this.markerShadow = (0, _jquery2.default)('<div />').addClass('time-marker shadow').hide();

				this.markerShadowTime = (0, _jquery2.default)('<div />').addClass('time');
				this.markerTime = (0, _jquery2.default)('<div />').addClass('time').hide();
				this.played = (0, _jquery2.default)('<div />').addClass('time-played');
				this.buffered = (0, _jquery2.default)('<div />');
				this.currentTime.text = '00:00';
				this.line = (0, _jquery2.default)('<div />').addClass('timeline').append(this.marker.append(this.markerTime)).append(this.markerShadow.append(this.markerShadowTime)).append(this.played).append(this.buffered).on({
					'mousemove': function mousemove(e) {
						if (_this2.drag) return;

						var p = _this2.getPosition(e.pageX);
						if (p > 0 && p < 1) {
							_this2.markerShadow.show();
							_this2.markerShadow.css('left', p * 100 + '%');
							_this2.markerShadowTime.html((0, _time.secondsToTime)(video.duration * p));
						} else _this2.markerShadow.hide();
					},

					'mouseleave': function mouseleave(e) {
						if (_this2.drag) return;
						_this2.markerShadow.hide();
					},

					'mousedown': function mousedown(e) {},

					'click': function click(e) {
						if (e.which !== 1) return;
						if (_this2.drag) return;
						_this2.hardMove(_this2.getPosition(e.pageX));
						video.currentTime = video.duration * _this2.getPosition(e.pageX);
					},

					'touchmove': function touchmove(e) {}
				});

				this.element.addClass('timeline-container').append((0, _jquery2.default)('<div />').addClass('timeline-subcontainer').append(this.currentTime.element).append(this.line).append(this.totalTime.element));

				this.marker.on('mousedown', function (e) {
					if (e.which !== 1) return;
					e.preventDefault();
					_this2.markerShadow.hide();
					_this2.drag = true;
				});

				(0, _jquery2.default)(document).on({

					'mousemove': function mousemove(e) {
						if (!_this2.drag) return;
						var p = _this2.getPosition(e.pageX);
						if (p > 0 && p < 1) {
							_this2.markerTime.show().html((0, _time.secondsToTime)(video.duration * p));
							video.seek(video.duration * p);
						}
					},

					'mouseup': function mouseup(e) {
						_this2.markerTime.hide();
						_this2.drag = false;
					}
				});
			}
		}, {
			key: 'onSectionsInit',
			value: function onSectionsInit(e, data) {
				var sections = data.items;
				var video = this.player.video;
				var duration = video.duration;
				var result = (0, _jquery2.default)('<div />');
				sections.forEach(function (section) {
					var length = section.end - section.begin;
					var item = (0, _jquery2.default)('<div />').addClass('timeline-section').css({
						width: length / duration * 99 + '%',
						left: section.begin / duration * 99 + '%'
					});
					result.append(item);
				});
				this.line.append(result);
			}
		}, {
			key: 'getPosition',
			value: function getPosition(x) {
				return (x - this.line.offset().left) / this.line.width();
			}

			/**
	   * Move marker on timeline without change video.currentTime
	   *
	   * @param {Number} percent The percent which you want to move marker on timeline
	   */

		}, {
			key: 'hardMove',
			value: function hardMove(percent) {
				var currentTime = this.player.video.duration * percent;
				percent = percent * 100;
				this.marker.css('left', percent + '%');
				this.played.css('width', percent + '%');
				this.currentTime.text = (0, _time.secondsToTime)(currentTime);
			}
		}, {
			key: 'move',
			value: function move() {
				var video = this.player.video;
				var percent = (video.currentTime / video.duration * 100).toFixed(2);
				var currentTime = video.currentTime;
				this.marker.css('left', percent + '%');
				this.played.css('width', percent + '%');
				this.currentTime.text = (0, _time.secondsToTime)(currentTime);
			}

			/**
	   * @override
	   */

		}, {
			key: 'onPlayerInited',
			value: function onPlayerInited(e) {
				var video = this.player.video;
				this.totalTime.text = (0, _time.secondsToTime)(video.duration);
				this.currentTime.element.css({
					'width': this.totalTime.element.width()
				});
			}

			/**
	   * On loadedmetadatta event handler
	   * It's call when video is init or player change source
	   * @param {Event} e
	   * @param {Object} data
	   * @param {Video} data.video
	   */

		}, {
			key: 'onLoadedMetaData',
			value: function onLoadedMetaData(e, data) {
				var video = data.video;
				this.totalTime.text = (0, _time.secondsToTime)(video.duration);
			}
		}, {
			key: '_initWatchBuffer',
			value: function _initWatchBuffer() {
				var _this3 = this;

				clearInterval(this.watchBufferInterval);
				var arr = [];
				var video = this.player.video;
				var updateProgressBar = function updateProgressBar() {
					var END = 1;
					var START = 0;
					var result = (0, _jquery2.default)('');
					video.loaded.forEach(function (item) {
						var domItem = (0, _jquery2.default)('<div />').addClass('time-buffered');
						domItem.css({
							'left': item[START] * 100 + '%',
							'width': (item[END] - item[START]) * 100 + '%'
						});
						result = result.add(domItem);
					});
					_this3.buffered.html(result);
					if (video.loaded.length && 1 - video.loadedSize <= 0.05) {
						clearInterval(_this3.watchBufferInterval);
					}
				};
				this.watchBufferInterval = setInterval(updateProgressBar, 500);
			}
		}]);

		return TimelineControl;
	}(_Control3.default);

	exports.default = TimelineControl;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file ControlText.js
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _Control2 = __webpack_require__(1);

	var _Control3 = _interopRequireDefault(_Control2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @param {Player} player Main player
	 * @class ControlText
	 * @exnteds Control
	 */

	var ControlText = function (_Control) {
		_inherits(ControlText, _Control);

		function ControlText(player) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, ControlText);

			options = _jquery2.default.extend({}, {
				className: ''
			}, options);
			return _possibleConstructorReturn(this, Object.getPrototypeOf(ControlText).call(this, player, options));
		}

		/**
	  * @override
	  */


		_createClass(ControlText, [{
			key: 'createElement',
			value: function createElement() {
				_get(Object.getPrototypeOf(ControlText.prototype), 'createElement', this).call(this);
			}

			/**
	   * @override
	   */

		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return 'control-text ' + this.options.className;
			}

			/**
	   * Setter of text field
	   * @public
	   * @param {String} value
	   */

		}, {
			key: 'text',
			set: function set(value) {
				this.element.html(value);
			}
		}]);

		return ControlText;
	}(_Control3.default);

	exports.default = ControlText;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	/**
	 * @file time.js
	 *
	 * @module time
	 */

	/**
	 * Convert seconds to format string 'hh:mm:ss'
	 *
	 * @access public
	 * @param {Number} seconds Seconds
	 * @returns {String}
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.secondsToTime = secondsToTime;
	function secondsToTime(seconds) {
		var h = Math.floor(seconds / 3600);
		var m = Math.floor(seconds % 3600 / 60);
		var s = Math.floor(seconds % 3600 % 60);
		var out = '';
		if (h > 0) out = h + ':';
		if (m < 10) out += '0';
		out += m + ':';
		if (s < 10) out += '0';
		out += s;
		return out;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file SectionControl.js
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _ControlCheckbox2 = __webpack_require__(14);

	var _ControlCheckbox3 = _interopRequireDefault(_ControlCheckbox2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @class SectionControl
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @param {Boolean} [options.checked=true]
	 * @extends ControlCheckbox
	 */

	var SectionControl = function (_ControlCheckbox) {
		_inherits(SectionControl, _ControlCheckbox);

		function SectionControl(player) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, SectionControl);

			options = _jquery2.default.extend({}, {
				iconName: 'list-ul',
				className: 'control--type_section',
				title: 'Показать/скрыть секции',
				disable: true
			}, options);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SectionControl).call(this, player, options));

			_this.player.on('sectionsinit', function () {
				_this.disable = false;
				_this.checked = true;
			});
			return _this;
		}

		_createClass(SectionControl, [{
			key: 'onChecked',
			value: function onChecked(e, data) {
				_get(Object.getPrototypeOf(SectionControl.prototype), 'onChecked', this).call(this, e);
				this.player.trigger('section_toggle', { checked: data.checked });
			}
		}]);

		return SectionControl;
	}(_ControlCheckbox3.default);

	exports.default = SectionControl;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file control-checkbox.js
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _Control2 = __webpack_require__(1);

	var _Control3 = _interopRequireDefault(_Control2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @param {boolean} [options.checked=false]
	 * @class ControlCheckbox Toggable control
	 */

	var ControlCheckbox = function (_Control) {
		_inherits(ControlCheckbox, _Control);

		function ControlCheckbox(player) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, ControlCheckbox);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ControlCheckbox).call(this, player, options));

			_this.checked = _this.options.checked || false;
			_this.element.on('leplayer_checked', _this.onChecked.bind(_this));
			return _this;
		}

		/**
	  * Setter for checked property
	  * @public
	  * @param {boolean} val
	  */


		_createClass(ControlCheckbox, [{
			key: 'onClick',


			/**
	   * @override
	   */
			value: function onClick(e) {
				_get(Object.getPrototypeOf(ControlCheckbox.prototype), 'onClick', this).call(this, e);
				this.checked = !this.checked;
			}

			/**
	   * On checked event handler
	   *
	   * @param {Event} e
	   * @param {Object} data
	   */

		}, {
			key: 'onChecked',
			value: function onChecked(e, data) {}

			/**
	   * @override
	   */

		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return 'control-checkbox ' + _get(Object.getPrototypeOf(ControlCheckbox.prototype), 'buildCSSClass', this).call(this);
			}
		}, {
			key: 'checked',
			set: function set(val) {
				if (this.disable) {
					return;
				}
				val = !!val;
				this._checked = val;
				this.element.toggleClass('control-checkbox--checked', val);
				this.element.trigger('leplayer_checked', { checked: val });
			}

			/**
	   * Getter for checked propery
	   * @public
	   * @return {boolean}
	   */
			,
			get: function get() {
				return this._checked;
			}
		}]);

		return ControlCheckbox;
	}(_Control3.default);

	exports.default = ControlCheckbox;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file FullscreenControl.js
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _Control2 = __webpack_require__(1);

	var _Control3 = _interopRequireDefault(_Control2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @param {Player} player Main player
	 * @class FullscreenControl
	 * @extends Control
	 */

	var FullscreenControl = function (_Control) {
		_inherits(FullscreenControl, _Control);

		function FullscreenControl(player) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, FullscreenControl);

			options = _jquery2.default.extend({}, {
				iconName: 'arrows-alt',
				className: 'fullscreen',
				title: 'Развернуть/свернуть на полный экран'
			}, options);
			return _possibleConstructorReturn(this, Object.getPrototypeOf(FullscreenControl).call(this, player, options));
		}

		/**
	  * @override
	  */


		_createClass(FullscreenControl, [{
			key: 'onClick',
			value: function onClick(e) {
				_get(Object.getPrototypeOf(FullscreenControl.prototype), 'onClick', this).call(this, e);
				this.player.video.fullscreen.toggle();
			}
		}]);

		return FullscreenControl;
	}(_Control3.default);

	exports.default = FullscreenControl;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file RateControl.js
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _Control2 = __webpack_require__(1);

	var _Control3 = _interopRequireDefault(_Control2);

	var _ControlText = __webpack_require__(11);

	var _ControlText2 = _interopRequireDefault(_ControlText);

	var _cookie = __webpack_require__(9);

	var _cookie2 = _interopRequireDefault(_cookie);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @class RateControl
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @property {Control} downControl  Down rate control
	 * @property {Control} upControl  Up rate control
	 * @property {ControlText} currentRate Control of cuurent rate
	 * @extends Control
	 */

	var RateControl = function (_Control) {
		_inherits(RateControl, _Control);

		function RateControl(player) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, RateControl);

			options = _jquery2.default.extend({}, {
				className: 'control-container'
			}, options);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RateControl).call(this, player, options));

			var video = _this.player.video;
			_this.downControl.element.on('click', function (e) {
				video.rate -= _this.player.options.rate.step;
			});

			_this.upControl.element.on('click', function (e) {
				video.rate += _this.player.options.rate.step;
			});
			return _this;
		}

		/**
	  * @override
	  */


		_createClass(RateControl, [{
			key: 'createElement',
			value: function createElement() {
				_get(Object.getPrototypeOf(RateControl.prototype), 'createElement', this).call(this);
				this.downControl = new _Control3.default(this.player, {
					className: 'rate-down',
					iconName: 'backward',
					title: 'Уменьшить скорость проигрывания'
				});
				this.upControl = new _Control3.default(this.player, {
					className: 'rate-up',
					iconName: 'forward',
					title: 'Увеличить скорость проигрывания'
				});
				this.currentRate = new _ControlText2.default(this.player, { className: 'rate-current' });

				this.element.append(this.downControl.element).append(this.currentRate.element).append(this.upControl.element);
			}

			/**
	   * @override
	   */

		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return this.options.className;
			}
		}, {
			key: 'init',
			value: function init() {
				var rate = _cookie2.default.get('rate', this.player.options.rate.default);
				this.show(rate);
			}
		}, {
			key: 'show',
			value: function show(value) {
				var video = this.player.video;
				value = value || video.rate;
				value = parseFloat(value).toFixed(2).toString().replace(/,/g, '.');
				this.currentRate.text = '×' + value;
			}
		}, {
			key: 'value',
			set: function set(value) {
				var video = this.player.video;
				var options = this.player.options;
				if (this.disable) {
					return false;
				}
				this.upControl.disable = false;
				this.downControl.disable = false;
				if (video.rate <= options.rate.min) {
					this.downControl.disable = true;
				} else if (video.rate >= options.rate.max) {
					this.upControl.disable = true;
				}
				this.show();
			}
		}, {
			key: 'disable',
			set: function set(value) {
				this._disable = value;
				this.downControl.disable = value;
				this.upControl.disable = value;
			}
		}]);

		return RateControl;
	}(_Control3.default);

	exports.default = RateControl;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file BackwardControl.js
	 *
	 * Backward control
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _Control2 = __webpack_require__(1);

	var _Control3 = _interopRequireDefault(_Control2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @param {Player} player Main player
	 * @param {Object} [options={}] Options
	 * @class BackwardControl
	 * @extends Control
	 */

	var BackwardControl = function (_Control) {
		_inherits(BackwardControl, _Control);

		function BackwardControl(player) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, BackwardControl);

			options = _jquery2.default.extend({}, {
				iconName: 'undo',
				className: 'backward',
				title: 'Отмотать назад на ' + player.options.playback.step.medium + ' секунд'
			}, options);
			return _possibleConstructorReturn(this, Object.getPrototypeOf(BackwardControl).call(this, player, options));
		}

		/**
	  * @override
	  */


		_createClass(BackwardControl, [{
			key: 'onClick',
			value: function onClick(e) {
				_get(Object.getPrototypeOf(BackwardControl.prototype), 'onClick', this).call(this, e);
				this.player.video.currentTime -= options.playback.step.medium;
			}
		}]);

		return BackwardControl;
	}(_Control3.default);

	exports.default = BackwardControl;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file SourceControl.js
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _ControlContainer2 = __webpack_require__(19);

	var _ControlContainer3 = _interopRequireDefault(_ControlContainer2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @class SourceControl
	 * @param {Player} player Main player
	 * @extends ControlConainer
	 */

	var SourceControl = function (_ControlContainer) {
		_inherits(SourceControl, _ControlContainer);

		function SourceControl(player) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, SourceControl);

			options = _jquery2.default.extend({}, {
				iconName: 'bullseye',
				title: 'Качество',
				className: 'source-control',
				disable: true
			}, options);
			return _possibleConstructorReturn(this, Object.getPrototypeOf(SourceControl).call(this, player, options));
		}

		/**
	  * @override
	  */


		_createClass(SourceControl, [{
			key: 'onItemClick',
			value: function onItemClick(e) {
				_get(Object.getPrototypeOf(SourceControl.prototype), 'onItemClick', this).call(this, e);
				var item = (0, _jquery2.default)(e.target);
				this.player.video.source = item.data('src');
			}
		}, {
			key: 'onPlayerInited',
			value: function onPlayerInited(e, data) {
				if (this.player.sources.length > 1) {
					for (var i in this.player.sources) {
						this.addItem(this.player.sources[i].title, {
							src: this.player.sources[i].src
						});
					}
					this.disable = false;
				}
			}
		}]);

		return SourceControl;
	}(_ControlContainer3.default);

	exports.default = SourceControl;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file ControlContainer.js
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _ControlDropdown2 = __webpack_require__(8);

	var _ControlDropdown3 = _interopRequireDefault(_ControlDropdown2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @param {Player} player Main player
	 * @class ControlContainer
	 * @extends ControlDropdown
	 */

	var ControlContainer = function (_ControlDropdown) {
		_inherits(ControlContainer, _ControlDropdown);

		function ControlContainer(player, options) {
			_classCallCheck(this, ControlContainer);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ControlContainer).call(this, player, options));

			_this._active = null;
			/**
	   * List of items
	   *
	   * @public
	   * @type {Array}
	   */
			_this.list = [];
			return _this;
		}

		/**
	  * Get item of container by index
	  *
	  * @public
	  * @param {number} index
	  */


		_createClass(ControlContainer, [{
			key: 'getByIndex',
			value: function getByIndex(index) {
				return this.list[index];
			}

			/**
	   * Set item active by index
	   *
	   * @public
	   * @param {number} index
	   */

		}, {
			key: 'setActiveByIndex',
			value: function setActiveByIndex(index) {
				if (this.active) {
					this.active.removeClass('control-container__item--active');
				}
				this._active = this.list[index].addClass('control-container__item--active');
				return this._active;
			}

			/**
	   * Getter of active field
	   *
	   * @public
	   * @type {jQuery}
	   */

		}, {
			key: 'addItem',


			/**
	   * @public
	   * @param {String|jQuery} Content of item
	   * @param {Object} Data of item
	   */
			value: function addItem(content, data) {
				var item = (0, _jquery2.default)('<div />').addClass('control-container__item').data(data).on('click', this.onItemClick.bind(this)).append(content);
				this.list.push(item);

				this.dropdownContent.append(item);

				return item;
			}

			/**
	   * On item click event handler
	   * @public
	   * @param {Event} e
	   */

		}, {
			key: 'onItemClick',
			value: function onItemClick(e) {
				this.active = e.currentTarget;
			}

			/**
	   * @override
	   */

		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return _get(Object.getPrototypeOf(ControlContainer.prototype), 'buildCSSClass', this).call(this) + ' control-container';
			}
		}, {
			key: 'active',
			get: function get() {
				var _this2 = this;

				if (this._active && this._active.length > 0) {
					return this._active;
				}
				this.list.forEach(function (item) {
					if (item.hasClass('control-container__item--active')) {
						_this2._active = item;
					}
				});
				return this._active;
			}

			/**
	   * Setter of active field
	   *
	   * @public
	   * @param {jQuery} Item of container
	   */
			,
			set: function set(element) {
				if (this.active) {
					this.active.removeClass('control-container__item--active');
				}
				if (element) {
					(0, _jquery2.default)(element).addClass('control-container__item--active');
				}
				this._active = element;
				return this._active;
			}
		}]);

		return ControlContainer;
	}(_ControlDropdown3.default);

	exports.default = ControlContainer;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file SubtitleControl.js
	 *
	 * Subtitle control
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _ControlContainer2 = __webpack_require__(19);

	var _ControlContainer3 = _interopRequireDefault(_ControlContainer2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @param {Player} player Main player
	 * @class SubtitleControl
	 * @extends ControlContainer
	 */

	var SubtitleControl = function (_ControlContainer) {
		_inherits(SubtitleControl, _ControlContainer);

		function SubtitleControl(player) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, SubtitleControl);

			options = _jquery2.default.extend({}, {
				iconName: 'commenting-o',
				title: 'Субтитры',
				className: 'subtitle-control',
				disable: true
			}, options);
			return _possibleConstructorReturn(this, Object.getPrototypeOf(SubtitleControl).call(this, player, options));
		}

		_createClass(SubtitleControl, [{
			key: 'onIconClick',
			value: function onIconClick(e) {
				_get(Object.getPrototypeOf(SubtitleControl.prototype), 'onIconClick', this).call(this, e);
				var video = this.player.video;
				this.active = null;
				video.track = -1;
			}
		}, {
			key: 'onItemClick',
			value: function onItemClick(e) {
				_get(Object.getPrototypeOf(SubtitleControl.prototype), 'onItemClick', this).call(this, e);
				var item = (0, _jquery2.default)(e.target);
				var video = this.player.video;
				if (item.data('language')) {
					video.track = item.data('language');
				}
			}
		}, {
			key: 'onPlayerInited',
			value: function onPlayerInited(e, data) {
				var video = this.player.video;
				if (video.subtitles.length > 0) {
					for (var i in video.subtitles) {
						if (!video.subtitles.hasOwnProperty(i)) continue;
						var item = video.subtitles[i];
						this.addItem(item.title, {
							src: item.src,
							language: item.language
						});
					}
					this.disable = false;
				}
			}
		}]);

		return SubtitleControl;
	}(_ControlContainer3.default);

	exports.default = SubtitleControl;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * @file DownloadControl.js
	 *
	 * Download control
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _Control2 = __webpack_require__(1);

	var _Control3 = _interopRequireDefault(_Control2);

	var _Icon = __webpack_require__(4);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @param {Player} player Main player
	 * @param {Object} [options]
	 * @class DownloadControl
	 * @exnteds Control
	 */

	var DownloadControl = function (_Control) {
		_inherits(DownloadControl, _Control);

		function DownloadControl(player) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, DownloadControl);

			options = _jquery2.default.extend({
				title: 'Скачать видео',
				className: 'download'
			}, options);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DownloadControl).call(this, player, options));

			_this.player.on('loadedmetadata', _this.onLoadedMetaData.bind(_this));
			return _this;
		}

		/**
	  * @override
	  */


		_createClass(DownloadControl, [{
			key: 'createElement',
			value: function createElement() {
				// TODO: Доопределить этот метод, а не переопредлеить
				this.element = (0, _jquery2.default)('<a />').attr({
					href: '',
					target: '_blank',
					download: true,
					title: this.options.title
				}).addClass(this.buildCSSClass()).append(new _Icon2.default(this.player, { iconName: 'download' }).element);
			}

			/**
	   * @override
	   */

		}, {
			key: 'buildCSSClass',
			value: function buildCSSClass() {
				return '' + _get(Object.getPrototypeOf(DownloadControl.prototype), 'buildCSSClass', this).call(this);
			}

			/**
	   * Setter of link field
	   * @public
	   * @param {String} value Path for video
	   */

		}, {
			key: 'onLoadedMetaData',
			value: function onLoadedMetaData(e, data) {
				this.link = data.video.currentSrc;
			}
		}, {
			key: 'link',
			set: function set(value) {
				this.element.attr('href', value);
			}
		}]);

		return DownloadControl;
	}(_Control3.default);

	exports.default = DownloadControl;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	
	'use strict';
	/**
	 * @file KeybindingInfoControl.js
	 *
	 * Info control
	 */

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _jquery = __webpack_require__(2);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _ControlDropdown2 = __webpack_require__(8);

	var _ControlDropdown3 = _interopRequireDefault(_ControlDropdown2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @param {Player} player Main player
	 * @class KeyBindingInfoControl
	 * @extends ControlDropdown
	 */

	var KeyBindingInfoControl = function (_ControlDropdown) {
		_inherits(KeyBindingInfoControl, _ControlDropdown);

		function KeyBindingInfoControl(player, options) {
			_classCallCheck(this, KeyBindingInfoControl);

			options = _jquery2.default.extend({}, {
				iconName: 'info',
				title: 'Инфо',
				className: 'info-control'
			}, options);
			return _possibleConstructorReturn(this, Object.getPrototypeOf(KeyBindingInfoControl).call(this, player, options));
		}

		_createClass(KeyBindingInfoControl, [{
			key: 'createElement',
			value: function createElement() {
				_get(Object.getPrototypeOf(KeyBindingInfoControl.prototype), 'createElement', this).call(this);
				var keyBinding = this.player.options.keyBinding;
				var infoContent = '';
				for (var _key in keyBinding) {
					if (!keyBinding.hasOwnProperty(_key)) continue;

					var hotkey = keyBinding[_key];
					var item = '';
					var keyString = '';

					hotkey.info.forEach(function (key, index) {
						if (index != 0) {
							keyString += ' + ';
						}
						keyString += '<div class="leplayer-key">' + key + '</div>';
					});

					item = '\n\t\t\t\t<div class="info-control__item">\n\t\t\t\t\t' + keyString + ' - ' + hotkey.description + '\n\t\t\t\t</div>\n\t\t\t';

					infoContent += item;
				}
				this.dropdownContent.addClass('info-control__content').append(infoContent);
			}
		}]);

		return KeyBindingInfoControl;
	}(_ControlDropdown3.default);

	exports.default = KeyBindingInfoControl;

/***/ }
/******/ ]);