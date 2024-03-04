import { ListingCreatedEvent, Publisher, Subjects } from '@dscproject/common';

export class ListingCreatedPublisher extends Publisher<ListingCreatedEvent> {
  subject: Subjects.ListingCreated = Subjects.ListingCreated;
}
