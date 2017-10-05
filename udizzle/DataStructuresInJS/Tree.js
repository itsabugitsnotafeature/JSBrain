'use strict'

// const Queue = require('./Queues');

import Queues from './Queues';

let q1 = new Queues();

q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);
q1.showQueue();
q1.dequque();
q1.showQueue();

