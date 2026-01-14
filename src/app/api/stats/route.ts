import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Diese Werte würden normalerweise von Ihrem Server kommen
    // Für den Prototyp zurück hardcodierte Werte
    
    const stats = {
      workflows: 116,
      syncStatus: 'active',
      serverStatus: 'online',
      lastSync: new Date(Date.now() - 5 * 60000).toISOString(), // 5 Minuten her
      totalBackupSize: '14.1 MB',
      backupRecords: 4342,
      n8nCloud: {
        status: 'online',
        workflows: 116,
        credentials: 42,
        executions: 663,
      },
      sync: {
        status: 'active',
        interval: 1800, // 30 Minuten in Sekunden
        workflowsSynced: 102,
        totalWorkflows: 116,
      },
    };

    return NextResponse.json(stats);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}
