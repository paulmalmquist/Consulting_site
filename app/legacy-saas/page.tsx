import { permanentRedirect } from 'next/navigation';

export default function LegacySaaSPage() {
  permanentRedirect('/saas-iceberg');
}
