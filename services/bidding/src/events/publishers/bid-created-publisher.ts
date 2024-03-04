import { BidCreatedEvent, Publisher, Subjects } from '@dscproject/common';

export class BidCreatedPublisher extends Publisher<BidCreatedEvent> {
  subject: Subjects.BidCreated = Subjects.BidCreated;
}
