import Vue from 'vue';
import { VirtualClass } from "./common";
import {ComponentOptions} from "vue/types/options";

/**
 * Single mixin.
 *
 * @export
 * @template T
 * //@param {{ new () : T; }} component
 * @returns {VirtualClass<T>}
 */
export function Mixin<T>(component: { new(): T; } & ComponentOptions<Vue>): VirtualClass<T> {
	return Vue.extend({
		mixins: [component]
	});
}

/**
 * Multiple mixins.
 *
 * @export
 * @template T
 * //@param {...{ new () : any; }[]} components
 * @returns {VirtualClass<T>}
 */
export function Mixins<T>(...components: ({ new(): any; } & ComponentOptions<Vue>)[]): VirtualClass<T> {
	return Vue.extend({
		mixins: components
	}) as any
}
