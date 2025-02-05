import uid from '@/sanity/lib/uid';

type Props = Readonly<{ event?: Sanity.Event } & Sanity.Module>;

const EventContent = ({ event, ...props }: Props) => {
  console.log('event: ', event);
  if (!event) return null;

  return <div id={uid(props)}>{event.title}</div>;
};

export default EventContent;
