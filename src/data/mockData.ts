import {
  Competency,
  AssessmentQuestion,
  CourseRecommendation,
  QuizQuestion,
  UserProfile,
  DemoStep
} from '../types';

export const initialUserProfile: UserProfile = {
  name: 'Ravi',
  role: 'Statistical Officer',
  organization: "India's Official Statistical System (MoSPI / NSO)",
  employeeId: 'ISS-SO-2023-8942',
  cadre: 'Subordinate Statistical Service (SSS)',
  posting: 'National Statistical Office (FOD), New Delhi',
  overallScore: 64,
  modulesCompleted: 3,
  totalModules: 7,
  recommendationsCount: 3,
};

export const initialCompetencies: Competency[] = [
  {
    id: 'statistical-analysis',
    name: 'Statistical Analysis',
    category: 'Core Methodology',
    score: 60,
    status: 'Needs Improvement',
    priority: 'Medium',
    benchmarkScore: 75,
    description: 'Hypothesis testing, regression modeling, and descriptive statistical metrics for official data.',
    keySkills: ['Parametric Tests', 'Variance Analysis', 'Time Series Smoothing'],
  },
  {
    id: 'data-visualization',
    name: 'Data Visualization',
    category: 'Reporting & Dissemination',
    score: 88,
    status: 'Strong',
    priority: 'Low',
    benchmarkScore: 70,
    description: 'Dashboard generation, thematic statistical mapping, and public data communication.',
    keySkills: ['GIS Mapping', 'MoSPI Data Portals', 'Infographics & Tabulation'],
  },
  {
    id: 'survey-design',
    name: 'Survey Design',
    category: 'Field Operations',
    score: 65,
    status: 'Needs Improvement',
    priority: 'Medium',
    benchmarkScore: 75,
    description: 'Schedule development, non-sampling error controls, and field inquiry protocols.',
    keySkills: ['Questionnaire Testing', 'Listing Operations', 'Validation Rules'],
  },
  {
    id: 'sampling-methods',
    name: 'Sampling Methods',
    category: 'Mathematical Foundations',
    score: 42,
    status: 'Major Gap',
    priority: 'High',
    benchmarkScore: 80,
    description: 'Probability sampling frames, stratification criteria, cluster sampling, and design weights.',
    keySkills: ['Stratified Random Sampling', 'Multi-stage Sampling', 'Estimation of Standard Error'],
  },
];

export const updatedCompetencies: Competency[] = [
  {
    id: 'statistical-analysis',
    name: 'Statistical Analysis',
    category: 'Core Methodology',
    score: 60,
    status: 'Needs Improvement',
    priority: 'Medium',
    benchmarkScore: 75,
    description: 'Hypothesis testing, regression modeling, and descriptive statistical metrics for official data.',
    keySkills: ['Parametric Tests', 'Variance Analysis', 'Time Series Smoothing'],
  },
  {
    id: 'data-visualization',
    name: 'Data Visualization',
    category: 'Reporting & Dissemination',
    score: 88,
    status: 'Strong',
    priority: 'Low',
    benchmarkScore: 70,
    description: 'Dashboard generation, thematic statistical mapping, and public data communication.',
    keySkills: ['GIS Mapping', 'MoSPI Data Portals', 'Infographics & Tabulation'],
  },
  {
    id: 'survey-design',
    name: 'Survey Design',
    category: 'Field Operations',
    score: 65,
    status: 'Needs Improvement',
    priority: 'Medium',
    benchmarkScore: 75,
    description: 'Schedule development, non-sampling error controls, and field inquiry protocols.',
    keySkills: ['Questionnaire Testing', 'Listing Operations', 'Validation Rules'],
  },
  {
    id: 'sampling-methods',
    name: 'Sampling Methods',
    category: 'Mathematical Foundations',
    score: 78,
    previousScore: 42,
    status: 'Strong',
    priority: 'Low',
    benchmarkScore: 80,
    description: 'Probability sampling frames, stratification criteria, cluster sampling, and design weights.',
    keySkills: ['Stratified Random Sampling', 'Multi-stage Sampling', 'Estimation of Standard Error'],
  },
];

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: 1,
    domain: 'Sampling Methods',
    question: 'In large-scale socio-economic surveys conducted by the National Sample Survey Office (NSSO), why is multi-stage stratified sampling preferred over simple random sampling?',
    options: [
      'It completely eliminates sampling variance across all states',
      'It drastically reduces field operational costs while maintaining representative strata coverage',
      'It avoids the need for any primary sampling units (PSUs)',
      'It generates equal selection probabilities for all households without weighting'
    ],
    correctAnswer: 1,
    explanation: 'Multi-stage stratified sampling groups geographic areas (villages/urban blocks) into manageable units, reducing travel costs and ensuring balanced representation of rural and urban subpopulations.',
    difficulty: 'Medium',
  },
  {
    id: 2,
    domain: 'Sampling Methods',
    question: 'Under Neyman optimum allocation in stratified random sampling, how should the sample size allocated to stratum h (nh) be determined?',
    options: [
      'Proportionate only to the total population size Nh',
      'Inversely proportional to stratum variance Sh',
      'Directly proportional to the product of stratum size Nh and stratum standard deviation Sh',
      'Equally distributed regardless of stratum heterogeneity'
    ],
    correctAnswer: 2,
    explanation: 'Neyman allocation allocates larger sample sizes to strata that are larger in size and exhibit higher internal standard deviations, minimizing overall sampling variance for fixed total sample size.',
    difficulty: 'Hard',
  },
  {
    id: 3,
    domain: 'Statistical Analysis',
    question: 'When estimating national accounts metrics like Gross Value Added (GVA), which price measurement basis removes net taxes on products?',
    options: [
      'GVA at Basic Prices',
      'GDP at Market Prices',
      'Gross Output at Factor Cost only',
      'Per Capita Disposable Income'
    ],
    correctAnswer: 0,
    explanation: 'Basic Price is the amount receivable by the producer from the purchaser for a unit of a good or service produced as output minus any tax payable, and plus any subsidy receivable.',
    difficulty: 'Medium',
  },
  {
    id: 4,
    domain: 'Survey Design',
    question: 'Which of the following techniques is most effective in detecting and reducing non-sampling response bias during field canvassing?',
    options: [
      'Increasing the sample size tenfold without field scrutiny',
      'Conducting concurrent field inspections and re-interviewing a sub-sample of households',
      'Omitting unanswered questions from the calculation denominator',
      'Replacing non-responding households with convenient neighboring households'
    ],
    correctAnswer: 1,
    explanation: 'Re-interviewing a random sub-sample and concurrent field supervisory inspections by senior statistical officers are standard NSSO quality assurance procedures.',
    difficulty: 'Medium',
  },
  {
    id: 5,
    domain: 'Data Visualization',
    question: 'For presenting district-wise multi-dimensional poverty indices with geographic boundaries, which visual format is most appropriate for official dissemination?',
    options: [
      'Unordered 3D Pie Chart',
      'Choropleth Thematic Heatmap with standardized quantile classification',
      'Radar chart with 750 individual district vertices',
      'Multi-line trend series without temporal axis'
    ],
    correctAnswer: 1,
    explanation: 'Choropleth thematic maps with quantile/Jenks natural breaks provide clear, spatial understanding of regional socio-economic disparity for policymakers.',
    difficulty: 'Easy',
  },
];

export const recommendedCourses: CourseRecommendation[] = [
  {
    id: 'course-1',
    title: 'Basics of Sampling Methods',
    difficulty: 'Beginner',
    priority: 'High',
    courseType: 'Core Competency',
    source: 'iGOT Karmayogi',
    duration: '3.5 hours',
    modulesCount: 5,
    competencyTarget: 'Sampling Methods (Foundations)',
    description: 'Fundamental probability concepts, sampling vs complete enumeration, sample frame preparation, and introduction to standard errors in official statistics.',
    curriculum: [
      'Principles of Sample Survey vs Census in MoSPI',
      'Sampling Frames & Sources of Coverage Error',
      'Simple Random Sampling (SRSWR & SRSWOR)',
      'Calculation of Sampling Variance & Standard Errors',
      'Real-world NSSO Case Studies'
    ],
  },
  {
    id: 'course-2',
    title: 'Stratified Sampling',
    difficulty: 'Intermediate',
    priority: 'High',
    courseType: 'Targeted Remediation',
    source: 'iGOT Karmayogi',
    duration: '4.0 hours',
    modulesCount: 6,
    competencyTarget: 'Stratified Sampling & Variance Allocation',
    description: 'Principles of stratification, construction of strata boundaries, proportional vs Neyman optimum allocation, and calculation of weighted estimators.',
    curriculum: [
      'Purpose and Mechanics of Stratified Random Sampling',
      'Homogeneity within Strata & Heterogeneity between Strata',
      'Proportional Allocation vs Neyman Optimum Allocation',
      'Sample Size Estimation for Sub-State Aggregates',
      'Practical Lab: Stratification of Annual Survey of Industries (ASI)'
    ],
  },
  {
    id: 'course-3',
    title: 'Survey Design Fundamentals',
    difficulty: 'Intermediate',
    priority: 'Medium',
    courseType: 'Recommended',
    source: 'iGOT Karmayogi',
    duration: '5.0 hours',
    modulesCount: 7,
    competencyTarget: 'Survey Design & Schedule Formulation',
    description: 'Holistic survey methodology covering questionnaire construction, pilot testing, fieldwork protocols, and non-sampling error containment.',
    curriculum: [
      'Survey Objectives & Concept Clarification',
      'Questionnaire Wording, Flow, and Skip Patterns',
      'Field Listing and Village/Block Delineation',
      'Data Scrutiny and Computer-Assisted Personal Interviewing (CAPI)',
      'Data Quality Assurance Framework'
    ],
  },
  {
    id: 'course-4',
    title: 'Advanced Sampling Techniques',
    difficulty: 'Advanced',
    priority: 'High',
    courseType: 'Advanced',
    source: 'iGOT Karmayogi',
    duration: '6.5 hours',
    modulesCount: 8,
    competencyTarget: 'Multi-Stage & Cluster Complex Designs',
    description: 'Two-stage stratified designs, probability proportional to size (PPS) selection, systematic sampling with circular interval, and ratio/regression estimation.',
    curriculum: [
      'Multi-Stage Sampling & Primary Sampling Unit Selection',
      'Probability Proportional to Size (PPS) Systematic Selection',
      'Cluster Sampling & Intraclass Correlation Coefficient',
      'Calibration of Weights & Post-Stratification Estimators',
      'Complex Variance Estimation: Jackknife & Bootstrap Techniques'
    ],
  },
];

export const samplePdfText = `GOVERNMENT OF INDIA
MINISTRY OF STATISTICS AND PROGRAMME IMPLEMENTATION (MoSPI)
NATIONAL STATISTICAL SYSTEMS TRAINING ACADEMY (NSSTA)

TRAINING COMPENDIUM: MODULE 4
METHODOLOGY OF SAMPLING TECHNIQUES IN OFFICIAL SOCIO-ECONOMIC SURVEYS

1. INTRODUCTION TO PROBABILITY SAMPLING
In official statistical operations like the National Sample Survey (NSS) and Periodic Labour Force Survey (PLFS), complete enumeration is prohibitively expensive and time-consuming. Sampling allows statistical officers to make valid inferences about large populations with quantifiable margins of error.

2. STRATIFIED SAMPLING PRINCIPLES
Stratified sampling is one of the most widely employed designs.
Primary Purpose: To divide a heterogeneous population into homogeneous subgroups (strata) prior to selection.
Key Advantages:
a) Ensures representation of key socio-economic subgroups (e.g., rural agro-climatic zones, urban enterprise sizes).
b) Reduces sampling error and variance compared to simple random sampling of the same size.
c) Enables separate estimates for each individual stratum.

3. ALLOCATION OF SAMPLE SIZE ACROSS STRATA
- Proportional Allocation: Sample sizes allocated in direct ratio to stratum population sizes.
- Neyman Optimum Allocation: Sample sizes proportional to the product of stratum size and internal standard deviation. Strata with greater variability receive larger samples.

4. CLUSTER AND MULTI-STAGE SAMPLING
When sampling frames for ultimate units (households) do not exist beforehand, multi-stage sampling is utilized:
- First Stage Units (FSUs): Census villages (rural) and Urban Frame Survey (UFS) blocks (urban).
- Second Stage Units (SSUs): Households or enterprises listed within selected FSUs.

5. NON-SAMPLING ERRORS
Unlike sampling errors which decrease with larger sample sizes, non-sampling errors (measurement bias, non-response, recording errors) can increase. Strict validation rules and supervisory audits are mandatory.`;

export const aiGeneratedQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'What is the primary purpose of stratified sampling?',
    options: [
      'To increase population size',
      'To divide the population into homogeneous groups',
      'To eliminate sampling',
      'To select only the largest group'
    ],
    correctIndex: 1,
    topic: 'Stratified Sampling',
    difficulty: 'Easy',
    explanation: 'The primary purpose of stratified sampling is to partition a heterogeneous population into mutually exclusive, homogeneous strata to ensure representation and minimize estimation variance.',
  },
  {
    id: 2,
    question: 'In NSSO multi-stage design, what typically serves as the First Stage Unit (FSU) in rural and urban sectors respectively?',
    options: [
      'Individual households and individual citizens',
      'Census villages in rural areas and Urban Frame Survey (UFS) blocks in urban areas',
      'State capitals and district headquarters exclusively',
      'Agricultural mandis and commercial malls'
    ],
    correctIndex: 1,
    topic: 'Population Concepts',
    difficulty: 'Medium',
    explanation: 'In official NSS rounds, the 2011 Census list of villages serves as the rural sampling frame (FSUs) while UFS blocks maintained by FOD serve as urban FSUs.',
  },
  {
    id: 3,
    question: 'Which allocation method in stratified sampling produces the minimum sampling variance for an overall fixed sample size when survey costs per unit are uniform?',
    options: [
      'Equal allocation across all strata',
      'Neyman optimum allocation (proportional to stratum size multiplied by stratum standard deviation)',
      'Arbitrary allocation based on enumerator discretion',
      'Inverted variance allocation'
    ],
    correctIndex: 1,
    topic: 'Stratified Sampling',
    difficulty: 'Hard',
    explanation: 'Neyman allocation assigns higher sample sizes to strata with larger population weights and greater variability, mathematically minimizing the variance of the stratified estimator.',
  },
  {
    id: 4,
    question: 'What happens to the sampling variance when elements within clusters are highly homogeneous (positive intraclass correlation)?',
    options: [
      'Cluster sampling becomes far less efficient than simple random sampling of the same size',
      'Cluster sampling variance drops to zero immediately',
      'Standard error becomes negative',
      'The design effect drops below 0.1'
    ],
    correctIndex: 0,
    topic: 'Cluster Sampling',
    difficulty: 'Medium',
    explanation: 'High positive intraclass correlation within clusters means units within the same cluster provide redundant information, resulting in higher sampling variance and a larger Design Effect (Deff > 1).',
  },
  {
    id: 5,
    question: 'Why does stratified sampling guarantee that no critical subgroup is left unrepresented?',
    options: [
      'Because every stratum is sampled independently with at least a minimum allocated sample size',
      'Because all population members are interviewed',
      'Because random number tables are prohibited in stratification',
      'Because only the majority subgroup is surveyed'
    ],
    correctIndex: 0,
    topic: 'Stratified Sampling',
    difficulty: 'Easy',
    explanation: 'By partitioning the frame into distinct strata and drawing independent probability samples from each, stratified sampling guarantees predefined coverage for all subgroups.',
  },
  {
    id: 6,
    question: 'When sampling without replacement (SRSWOR), what mathematical term reduces the estimated variance as the sample size approaches total population size N?',
    options: [
      'Poisson Correction Factor',
      'Finite Population Correction (FPC = (N - n) / N)',
      'Kurtosis Inflation Ratio',
      'Neyman Stratification Constant'
    ],
    correctIndex: 1,
    topic: 'Population Concepts',
    difficulty: 'Medium',
    explanation: 'The Finite Population Correction (FPC) accounts for the fraction of the population sampled without replacement, reducing variance toward zero as sample size n approaches N.',
  },
  {
    id: 7,
    question: 'In systematic sampling with a sampling interval k = N/n, how is the initial element chosen?',
    options: [
      'The very first element is always manually selected',
      'A random start integer is selected between 1 and k with equal probability',
      'The middle element of the sorted register is chosen',
      'The element with the highest survey variable is selected'
    ],
    correctIndex: 1,
    topic: 'Population Concepts',
    difficulty: 'Easy',
    explanation: 'Linear systematic sampling requires picking a random starting point r where 1 <= r <= k, ensuring every element has an equal probability 1/k of inclusion.',
  },
  {
    id: 8,
    question: 'What is the primary operational trade-off when deciding between Cluster Sampling and Simple Random Sampling?',
    options: [
      'Cluster sampling increases travel costs but lowers sampling error',
      'Cluster sampling significantly reduces travel and listing costs while accepting higher sampling variance for a given sample size',
      'Cluster sampling eliminates the need for any supervisory audits',
      'Cluster sampling cannot be analyzed using standard statistical software'
    ],
    correctIndex: 1,
    topic: 'Cluster Sampling',
    difficulty: 'Medium',
    explanation: 'Cluster sampling groups nearby units together, dramatically reducing field travel logistics, but clustered units are often correlated, increasing variance relative to unclustered SRS.',
  },
  {
    id: 9,
    question: 'In stratified sampling, if all elements within each stratum have exactly identical values (zero within-stratum variance), what is the variance of the stratified estimator?',
    options: [
      'Equal to total population variance',
      'Zero',
      'Infinite',
      'Equal to sample size squared'
    ],
    correctIndex: 1,
    topic: 'Stratified Sampling',
    difficulty: 'Hard',
    explanation: 'If within-stratum variance S_h^2 = 0 for all strata, the overall variance of the stratified sample mean estimator is zero, demonstrating the maximum theoretical gain of stratification.',
  },
  {
    id: 10,
    question: 'Which of the following errors does NOT decrease as sample size increases during survey administration?',
    options: [
      'Standard error of the sample mean',
      'Sampling variance of the estimated proportion',
      'Non-sampling errors (e.g., enumerator fatigue, recording errors, non-response)',
      'Margin of error under 95% confidence intervals'
    ],
    correctIndex: 2,
    topic: 'Population Concepts',
    difficulty: 'Medium',
    explanation: 'Non-sampling errors stem from human factors, ambiguities, and recording mistakes; as sample size grows, managing field quality becomes harder, potentially inflating non-sampling error.',
  },
];

export const demoSteps: DemoStep[] = [
  {
    id: 'login',
    stepNumber: 1,
    label: 'Login',
    description: 'Official Government Authentication for MoSPI Statistical Officers',
  },
  {
    id: 'dashboard',
    stepNumber: 2,
    label: 'Dashboard',
    description: 'Welcome Ravi, competency cards & baseline score',
  },
  {
    id: 'assessment',
    stepNumber: 3,
    label: 'Assessment',
    description: '5-question official statistical evaluation',
  },
  {
    id: 'gap-analysis',
    stepNumber: 4,
    label: 'Gap Detection',
    description: 'Sampling Methods: 42% (Critical Gap, -33% vs 75% Benchmark)',
  },
  {
    id: 'recommendations',
    stepNumber: 5,
    label: 'Recommendations',
    description: 'Personalized iGOT Karmayogi course recommendations',
  },
  {
    id: 'learning',
    stepNumber: 6,
    label: 'Learning View',
    description: 'Basics of Sampling Methods • Stratified Sampling Study Material',
  },
  {
    id: 'quiz-generator',
    stepNumber: 7,
    label: 'Quiz Generator',
    description: 'Upload learning material (Sampling_Methods.pdf) & configure MCQs',
  },
  {
    id: 'quiz',
    stepNumber: 8,
    label: 'AI Quiz',
    description: 'AI Generated Quiz — Sampling Methods with instant explanations',
  },
  {
    id: 'quiz-result',
    stepNumber: 9,
    label: 'Quiz Result',
    description: 'Score 8/10 (80%), Strong/Weak topics & AI Learning Analysis',
  },
  {
    id: 'updated-dashboard',
    stepNumber: 10,
    label: 'Updated Competency',
    description: 'Sampling Methods jumps 42% → 78% (+36%), Target Achieved',
  },
];
