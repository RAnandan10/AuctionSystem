import { ListingUpdatedEvent, Publisher, Subjects } from '@dscproject/common';

export class ListingUpdatedPublisher extends Publisher<ListingUpdatedEvent> {
  subject: Subjects.ListingUpdated = Subjects.ListingUpdated;
}
