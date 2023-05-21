import ErrorWrapper from '@/widgets/ErrorWrapper/ErrorWrapper';

function NotFound() {
  return <ErrorWrapper error={404} />;
}

export default NotFound;
