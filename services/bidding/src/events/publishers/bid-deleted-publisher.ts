import { BidDeletedEvent, Publisher, Subjects } from '@dscproject/common';

export class BidDeletedPublisher extends Publisher<BidDeletedEvent> {
  subject: Subjects.BidDeleted = Subjects.BidDeleted;
}
