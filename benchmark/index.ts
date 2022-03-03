import Benchmark = require('benchmark');
import { FastFixedQueue } from '../src';

let benchmarkSuite = new Benchmark.Suite();
const MAX_SIZE = 1025;
const MULTIPLIER = 2;

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
		});
}
benchmarkSuite
	.on('cycle', function (event: { target: unknown }) {
		console.log(`${event.target}\n`);
	})
	.run();
