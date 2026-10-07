/**
 * Beliefs and priorities transcribed from Kevin's October 6, 2026 Word revisions.
 * Wording, heading structure, and order preserved; repeated whitespace normalized.
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
      title: 'Student-centered decisions-Budgeting with purpose',
      body: 'The school board must make policy and budgeting choices that directly support student growth and development: mastering literacy skills, reading comprehension, and social-emotional learning that builds individual agency and community. As well as addressing barriers like food insecurity and unreliable transportation to provide a positive student experience.',
    },
    {
      title: 'Restoring trust through real coordination',
      body: 'We must work together to strengthen cooperation across the entire district ecosystem-students, families, teachers, school leaders & support staff, district administration, the board and the community-clear roles and expectations, consistent and thorough communication, so students can feel secure in a stable learning environment',
    },
    {
      title: 'Building the essentials that make achievement possible',
      body: 'We must have sensible and consistent student and staff assignment processes, stronger parent involvement, retain and support qualified licensed teachers, and communicate the good things being done to show the value of public education in every neighborhood in South Bend.',
    },
  ],
  priorities: [
    'Student literacy & reading comprehension',
    'Social/emotional learning & student agency',
    'Support students experiencing food insecurity',
    'Reasonable & stable school assignments for all',
    'Consistent & reliable student transportation',
    'Recruitment & retention of qualified teachers',
    'Promote consistent parent & family involvement',
    'Illustrate the value of public education to the community',
  ],
} as const;
