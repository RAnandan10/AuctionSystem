import { ListingExpiredEvent, Publisher, Subjects } from '@dscproject/common';

export class ExpirationCompletePublisher extends Publisher<ListingExpiredEvent> {
  subject: Subjects.ListingExpired = Subjects.ListingExpired;
}
