// Extends vitest's expect with @testing-library/jest-dom matchers (toBeInTheDocument, etc.)
// This runs for all test environments; DOM matchers are only useful in jsdom tests.
import "@testing-library/jest-dom/vitest";

// Silence pino output in tests
process.env.LOG_LEVEL = "silent";
process.env.CAREGIVER_TOKEN = process.env.CAREGIVER_TOKEN || "test-caregiver-token";
process.env.AGENT_SECRET_KEY = process.env.AGENT_SECRET_KEY || "SDISLXAAQIOJ6Q33X5NPGZ632RRAPHX52MHMTDJTVSOH2UV5AHNMICXT";
process.env.MOCK_NETWORK = "1";
process.env.STELLAR_NETWORK = "testnet";
process.env.PHARMACY_1_PUBLIC_KEY = process.env.PHARMACY_1_PUBLIC_KEY || "GBBD47IF6LWK7P7MDEVSCWR7DPUWV3NY3DTQEVFL4NAT4AQH3ZLLFLA5";
process.env.BILL_PROVIDER_PUBLIC_KEY = process.env.BILL_PROVIDER_PUBLIC_KEY || "GBBD47IF6LWK7P7MDEVSCWR7DPUWV3NY3DTQEVFL4NAT4AQH3ZLLFLA5";
process.env.MPP_SECRET_KEY = process.env.MPP_SECRET_KEY || "mock-secret";
process.env.LLM_API_KEY = process.env.LLM_API_KEY || "mock-api-key";
