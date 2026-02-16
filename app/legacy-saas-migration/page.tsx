import { permanentRedirect } from 'next/navigation';

export default function LegacySaaSMigrationPage() {
  permanentRedirect('/saas-iceberg');
}
