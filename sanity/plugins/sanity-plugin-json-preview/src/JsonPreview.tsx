import ReactJson from 'react-json-view';
import { UserViewComponent } from 'sanity/structure';

type Props = UserViewComponent['defaultProps'];

const JsonPreview = ({ ...props }: Props) => {
  const { document } = props;

  if (!document) return null;

  const title = document.displayed.title;

  return (
    <>
      <h1>JSON Data for &quot;{typeof title === 'string' && title}&quot;</h1>
      <ReactJson src={document.displayed} collapsed={2} theme={'monokai'} />
    </>
  );
};

export default JsonPreview;
