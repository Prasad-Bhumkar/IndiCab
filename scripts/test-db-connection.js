// Simple database connection test
const { connectDB } = require('../src/lib/db');

async function testConnection() {
  try {
    await connectDB();
    console.log('✅ Database connection successful');
    process.exit(0);
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    process.exit(1);
  }
}

testConnection();