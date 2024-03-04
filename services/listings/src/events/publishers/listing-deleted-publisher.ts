import { ListingDeletedEvent, Publisher, Subjects } from '@dscproject/common';

export class ListingDeletedPublisher extends Publisher<ListingDeletedEvent> {
  subject: Subjects.ListingDeleted = Subjects.ListingDeleted;
}
