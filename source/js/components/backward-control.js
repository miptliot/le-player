'use strict';
/**
 * @file backward-control.js
 *
 * Backward control
 */

import $ from 'jquery';
import Control from './control';

/**
 * @param {Player} player Main player
 * @class BackwardControl
 */
class BackwardControl extends Control {
	constructor (player, options={}) {
		options = $.extend({}, {
			iconName : 'undo',
			className : 'backward',
			title : `Отмотать назад на ${player.options.playback.step.medium} секунд`,
		}, options);
		super(player, options);
	}

	onClick(e) {
		super.onClick(e);
		this.player.video.currentTime -= options.playback.step.medium;
	}
}

export default BackwardControl;