/**
 * Beliefs and priorities transcribed verbatim from the original Word document.
 * A belief's opening sentence is separated only for typographic hierarchy.
 * Candidate details and logo approved in Kevin's September 25, 2026 email.
 * His ballot-name spelling, domain ownership, and footer wording remain pending.
 */
export const site = {
  title: 'Hawkins for Schools',
  description: 'Kevin Hawkins, candidate for South Bend Community School Corporation School Board Member representing District 1. Read his beliefs and priorities.',
  candidateName: 'Kevin Hawkins',
  role: 'Candidate for School Board Member',
  district: 'South Bend Community School Corporation',
  seat: 'District 1',
  video: {
    id: '0cZHzmhVvik',
    title: 'One-on-One with South Bend School Board District 1 Candidate Kevin Jerome Hawkins',
    publisher: 'WSBT-TV',
  },
  foundation: {
    label: 'Hawkins Family Foundation',
    url: 'https://www.hawkinsfamilyfoundation.com/',
  },
  beliefsHeading: 'What I believe',
  prioritiesHeading: 'Priorities',
  beliefs: [
    {
      title: 'Student-centered decisions—budgeted with purpose.',
      body: 'As school board members, we must make policy and budget choices that directly support students’ growth: reading comprehension and literacy mastery, social-emotional learning that builds agency and belonging, and a student experience that removes barriers like food insecurity and unreliable transportation.',
    },
    {
      title: 'Restoring trust through real coordination.',
      body: 'We must work to strengthen cooperation across the entire district ecosystem—students, families, teachers, school leaders, district administration, the board, and the community—so expectations are clear, communication is consistent, and students can rely on stable systems.',
    },
    {
      title: 'Building the essentials that make achievement possible.',
      body: 'That means consistent student assignment processes, stronger parent involvement, keeping and supporting qualified licensed teachers, and communicating the value of public education to every neighborhood in South Bend.',
    },
  ],
  priorities: [
    'Literacy & reading comprehension mastery',
    'Social Emotional Learning + student agency',
    'Food insecurity supports',
    'Consistent, reliable transportation',
    'Clear, consistent student school assignment organization',
    'Teacher qualifications, retention, and stability',
    'Growth in consistent parent/family involvement',
    'Public education value to the community',
  ],
} as const;
