export default function CustomHTML({
  html,
}: Readonly<
  Partial<{
    html: {
      code: string;
    };
  }>
>) {
  if (!html?.code) return null;
  return <div dangerouslySetInnerHTML={{ __html: html.code }} />;
}
