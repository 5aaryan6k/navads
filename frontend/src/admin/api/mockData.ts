export const mockStats = {
  totalServices: 12,
  activeServices: 10,
  totalInquiries: 124,
  newInquiries: 8,
  pendingQuotes: 3,
  publishedContent: 45,
};

export const mockInquiries = [
  { id: "101", name: "Ahmed Ali", email: "ahmed@example.com", phone: "+966 50 123 4567", service: "Industrial Welding", status: "New", date: "2026-08-07T10:30:00Z" },
  { id: "102", name: "John Smith", email: "john@example.com", phone: "+966 55 987 6543", service: "Commercial Painting", status: "Contacted", date: "2026-08-06T14:15:00Z" },
  { id: "103", name: "Ali Khan", email: "ali@example.com", phone: "+966 54 555 1234", service: "General Contracting", status: "Closed", date: "2026-08-05T09:00:00Z" },
];

export const mockServices = [
  { id: "s1", name: "Industrial Welding", slug: "industrial-welding", category: "Welding", status: "Published", updatedAt: "2026-08-01T10:00:00Z" },
  { id: "s2", name: "Commercial Painting", slug: "commercial-painting", category: "Painting", status: "Published", updatedAt: "2026-08-02T11:00:00Z" },
  { id: "s3", name: "General Contracting", slug: "general-contracting", category: "Contracting", status: "Draft", updatedAt: "2026-08-05T15:30:00Z" },
];

export const mockActivities = [
  { id: "a1", user: "Aaryan", action: "Created service", target: "Industrial Welding", date: "2026-08-07T14:20:00Z" },
  { id: "a2", user: "Admin", action: "Updated homepage", target: "Hero Section", date: "2026-08-07T13:45:00Z" },
  { id: "a3", user: "Sales", action: "Changed inquiry #102 status", target: "Contacted", date: "2026-08-07T12:31:00Z" },
];
