import Benchmark = require('benchmark');
import { FastFixedQueue } from '../src';
import IterToolQueue = require('@iter-tools/queue');

let benchmarkSuite = new Benchmark.Suite();
const MAX_SIZE = 1025;
const MULTIPLIER = 2;
const TESTS_COUNT = 3;

for (let size = 2; size < MAX_SIZE; size *= MULTIPLIER) {
	benchmarkSuite = benchmarkSuite
		.add(`Array ${size}`, () => {
			const queue = new Array<number>();
			for (let i = 0; i < size; i++) {
				queue.push(i);
			}
			while (queue.length) {
				queue.shift();
			}
		})
		.add(`FixedSizeQueue ${size}`, () => {
			const queue = new FastFixedQueue();
			for (let i = 0; i < size; i++) {
				queue.push(i);
			}
			while (!queue.isEmpty()) {
				queue.shift();
			}
		})
		.add(`@iter-tools/queue ${size}`, () => {
			const queue = new (IterToolQueue as any)();
			for (let i = 0; i < size; i++) {
				queue.push(i);
			}
			while (queue.size) {
				queue.shift();
			}
		});
}
let cycle = 0;
benchmarkSuite
	.on('cycle', function (event: { target: unknown }) {
		cycle = (cycle + 1) % TESTS_COUNT;
		console.log(`${event.target}${cycle ? '' : '\n'}`);
	})
	.run();
