// ITIL Foundation Sample Papers - Questions Database
// Sample Paper 1: Questions 1-40
// Sample Paper 2: Questions 41-80

const itilQuestions = {
  exams: {
    sample1: {
      title: "ITIL Foundation Sample Paper 1",
      duration: 60, // minutes
      passMark: 26,
      totalQuestions: 40,
      questions: [
        {
          id: 1,
          question: "Which practice is responsible for moving components to live environments?",
          options: {
            A: "Change enablement",
            B: "Release management", 
            C: "IT asset management",
            D: "Deployment management"
          },
          correctAnswer: "D",
          explanation: "The purpose of the deployment management practice is to move new or changed hardware, software, documentation, processes, or any other component to live environments.",
          syllabusRef: "6.1.h"
        },
        {
          id: 2,
          question: "Which practice includes the classification and ownership of queries and requests from users?",
          options: {
            A: "Service desk",
            B: "Incident management",
            C: "Change enablement",
            D: "Service level management"
          },
          correctAnswer: "A",
          explanation: "Service desks provide a clear path for users to report issues, queries, and requests, and have them acknowledged, classified, owned, and actioned.",
          syllabusRef: "7.1.f"
        },
        {
          id: 3,
          question: "Which practice identifies metrics that reflect the customer's experience of a service?",
          options: {
            A: "Continual improvement",
            B: "Service desk",
            C: "Service level management",
            D: "Problem management"
          },
          correctAnswer: "C",
          explanation: "Service level management identifies metrics and measures that are a truthful reflection of the customer's actual experience and level of satisfaction with the whole service.",
          syllabusRef: "7.1.g"
        },
        {
          id: 4,
          question: "What is the PRIMARY use of a change schedule?",
          options: {
            A: "To support 'incident management' and improvement planning",
            B: "To manage emergency changes",
            C: "To plan changes and help avoid conflicts",
            D: "To manage standard changes"
          },
          correctAnswer: "C",
          explanation: "The change schedule is used to help plan changes, assist in communication, avoid conflicts, and assign resources.",
          syllabusRef: "7.1.b"
        },
        {
          id: 5,
          question: "Which service management dimension is focused on activities and how these are coordinated?",
          options: {
            A: "Organizations and people",
            B: "Information and technology",
            C: "Partners and suppliers",
            D: "Value streams and processes"
          },
          correctAnswer: "D",
          explanation: "The 'value streams and processes' dimension focuses on what activities the organization undertakes and how they are organized, as well as how the organization ensures that it is enabling value creation for all stakeholders efficiently and effectively.",
          syllabusRef: "3.1.d"
        },
        {
          id: 6,
          question: "How does categorization of incidents assist the 'incident management' practice?",
          options: {
            A: "It helps direct the incident to the correct support area",
            B: "It determines the priority assigned to the incident",
            C: "It ensures that incidents are resolved in timescales agreed with the customer",
            D: "It determines how the service provider is perceived"
          },
          correctAnswer: "A",
          explanation: "More complex incidents will usually be escalated to a support team for resolution. Typically, the routing is based on the incident category, which should help to identify the correct team.",
          syllabusRef: "7.1.c"
        },
        {
          id: 7,
          question: "Identify the missing word(s) in the following sentence. A service is a means of enabling value co-creation by facilitating [ ? ] that customers want to achieve.",
          options: {
            A: "…the warranty",
            B: "…outcomes",
            C: "…the utility",
            D: "…outputs"
          },
          correctAnswer: "B",
          explanation: "A service is 'a means of enabling value co-creation by facilitating outcomes that customers want to achieve, without the customer having to manage specific costs and risks'.",
          syllabusRef: "1.1.a"
        },
        {
          id: 8,
          question: "Which is a recommendation of the 'continual improvement' practice?",
          options: {
            A: "There should at least be a small team dedicated to leading 'continual improvement' efforts",
            B: "All improvements should be managed as multi-phase projects",
            C: "'Continual improvement' should be isolated from other practices",
            D: "External suppliers should be excluded from improvement initiatives"
          },
          correctAnswer: "A",
          explanation: "Although everyone should contribute in some way, there should at least be a small team dedicated full-time to leading continual improvement efforts and advocating the practice across the organization.",
          syllabusRef: "7.1.a"
        },
        {
          id: 9,
          question: "Which is a potential benefit of using an IT service management tool to support the 'incident management' practice?",
          options: {
            A: "It may ensure that the cause of incidents is identified within agreed times",
            B: "It may provide automated matching of incidents to problems or known errors",
            C: "It may ensure that supplier contracts are aligned with the needs of the service provider",
            D: "It may provide automated resolution and closure of complex incidents"
          },
          correctAnswer: "B",
          explanation: "Modern IT service management tools can provide automated matching of incidents to other incidents, problems or known errors.",
          syllabusRef: "7.1.c"
        },
        {
          id: 10,
          question: "Which role submits service requests?",
          options: {
            A: "The user, or their authorized representative",
            B: "The customer, or their authorized representative",
            C: "The sponsor, or their authorized representative",
            D: "The supplier, or their authorized representative"
          },
          correctAnswer: "A",
          explanation: "The purpose of the service request management practice is to support the agreed quality of a service by handling all pre-defined, user-initiated service requests... and a service request is defined as 'a request from a user or a user's authorized representative that initiates a service action'.",
          syllabusRef: "7.1.e"
        },
        {
          id: 11,
          question: "Which practice provides a single point of contact for users?",
          options: {
            A: "Incident management",
            B: "Change enablement",
            C: "Service desk",
            D: "Service request management"
          },
          correctAnswer: "C",
          explanation: "The purpose of the service desk practice is to capture demand for incident resolution and service requests. It should also be the entry point and single point of contact for the service provider with all of its users.",
          syllabusRef: "7.1.f"
        },
        {
          id: 12,
          question: "Which guiding principle recommends that the four dimensions of service management are considered?",
          options: {
            A: "Think and work holistically",
            B: "Progress iteratively with feedback",
            C: "Focus on value",
            D: "Keep it simple and practical"
          },
          correctAnswer: "A",
          explanation: "The 'think and work holistically' guiding principle advises that all aspects of an organization are considered when providing value in the form of services. This includes all four dimensions of service management.",
          syllabusRef: "2.2.e"
        },
        {
          id: 13,
          question: "Which would be supported by the 'service request management' practice?",
          options: {
            A: "A request to authorize a change that could have an effect on a service",
            B: "A request from a user for something which is a normal part of service delivery",
            C: "A request to restore service after a service interruption",
            D: "A request to investigate the cause of multiple related incidents"
          },
          correctAnswer: "B",
          explanation: "A service request is 'a request from a user or a user's authorized representative that initiates a service action which has been agreed as a normal part of service delivery.'",
          syllabusRef: "7.1.e"
        },
        {
          id: 14,
          question: "Which practice is the responsibility of everyone in the organization?",
          options: {
            A: "Service level management",
            B: "Change enablement",
            C: "Problem management",
            D: "Continual improvement"
          },
          correctAnswer: "D",
          explanation: "Continual improvement is everyone's responsibility and the commitment to and practice of continual improvement must be embedded into every fibre of the organization.",
          syllabusRef: "7.1.a"
        },
        {
          id: 15,
          question: "Identify the missing word in the following sentence. The purpose of the 'information security management' practice is to [ ? ] the organization's information.",
          options: {
            A: "…store",
            B: "…provide",
            C: "…audit",
            D: "…protect"
          },
          correctAnswer: "D",
          explanation: "The purpose of the information security management practice is to protect the information needed by the organization to conduct its business.",
          syllabusRef: "6.1.a"
        },
        {
          id: 16,
          question: "Which guiding principle recommends collecting data before deciding what can be re-used?",
          options: {
            A: "Focus on value",
            B: "Start where you are",
            C: "Keep it simple and practical",
            D: "Progress iteratively with feedback"
          },
          correctAnswer: "B",
          explanation: "The 'start where you are' guiding principle recommends that services and methods already in place should be measured and/or observed directly to properly understand their current state and what can be reused from them.",
          syllabusRef: "2.2.b"
        },
        {
          id: 17,
          question: "Which is NOT usually included as part of incident management?",
          options: {
            A: "Scripts for collecting initial information about incidents",
            B: "Formalized procedures for logging incidents",
            C: "Detailed procedures for the diagnosis of incidents",
            D: "The use of specialized knowledge for complicated incidents"
          },
          correctAnswer: "C",
          explanation: "This process does NOT usually include detailed procedures for how to diagnose, investigate, and resolve incidents.",
          syllabusRef: "7.1.c"
        },
        {
          id: 18,
          question: "Which describes the nature of the guiding principles?",
          options: {
            A: "Guiding principles can guide an organization in all circumstances",
            B: "Each guiding principle mandates specific actions and decisions",
            C: "An organization will select and adopt only one of the seven guiding principles",
            D: "Guiding principles describe the processes that all organizations must adopt"
          },
          correctAnswer: "A",
          explanation: "A guiding principle is defined as a recommendation that can guide an organization in all circumstances and will guide organizations when adopting service management.",
          syllabusRef: "2.1"
        },
        {
          id: 19,
          question: "Which statement about a change authority is CORRECT?",
          options: {
            A: "A single change authority should be assigned to authorize all types of change and change models",
            B: "A change authority should be assigned for each type of change and change model",
            C: "Normal changes are pre-authorized and do not need a change authority",
            D: "Emergency changes can be implemented without authorization from a change authority"
          },
          correctAnswer: "B",
          explanation: "It is essential that the correct change authority is assigned to each type of change to ensure that change enablement is both efficient and effective.",
          syllabusRef: "7.1.b"
        },
        {
          id: 20,
          question: "Which practice has the purpose of making new and changed services and features available for use?",
          options: {
            A: "Change enablement",
            B: "Service request management",
            C: "Release management",
            D: "Deployment management"
          },
          correctAnswer: "C",
          explanation: "The purpose of the release management practice is to make new and changed services and features available for use.",
          syllabusRef: "6.1.f"
        },
        {
          id: 21,
          question: "Which value chain activity ensures people understand the organization's vision?",
          options: {
            A: "Improve",
            B: "Plan",
            C: "Deliver and support",
            D: "Obtain/build"
          },
          correctAnswer: "B",
          explanation: "The purpose of the 'plan' value chain activity is to ensure a shared understanding of the vision, current status, and improvement direction for all four dimensions and all products and services across the organization.",
          syllabusRef: "5.2.a"
        },
        {
          id: 22,
          question: "Which statement about the value chain activities is CORRECT?",
          options: {
            A: "Every practice belongs to a specific value chain activity",
            B: "A specific combination of value chain activities and practices forms a service relationship",
            C: "Service value chain activities form a single workflow that enables value creation",
            D: "Each value chain activity contributes to the value chain by transforming specific inputs into outputs"
          },
          correctAnswer: "D",
          explanation: "These activities represent the steps an organization takes in the creation of value. Each activity transforms inputs into outputs.",
          syllabusRef: "5.1"
        },
        {
          id: 23,
          question: "What is the purpose of the 'supplier management' practice?",
          options: {
            A: "To ensure that the organization's suppliers and their performance are managed appropriately to support the seamless provision of quality products and services",
            B: "To align the organization's practices and services with changing business needs through the ongoing identification and improvement of services",
            C: "To ensure that the organization's suppliers and their performance are managed appropriately at strategic and tactical levels through coordinated marketing, selling, and delivery activities",
            D: "To ensure that accurate and reliable information about the configuration of suppliers' services is available when and where it is needed"
          },
          correctAnswer: "A",
          explanation: "The purpose of the supplier management practice is to ensure that the organization's suppliers and their performance are managed appropriately to support the seamless provision of quality products and services.",
          syllabusRef: "6.1.c"
        },
        {
          id: 24,
          question: "What are the two types of cost that a service consumer should evaluate?",
          options: {
            A: "The price of the service, and the cost of creating the service",
            B: "The costs removed by the service, and the costs imposed by the service",
            C: "The cost of provisioning the service, and the cost of improving the service",
            D: "The cost of software, and the cost of hardware"
          },
          correctAnswer: "B",
          explanation: "From the service consumer's perspective, there are two types of costs involved in service relationships: 1. Costs removed from the service consumer by the service 2. Costs imposed on the consumer by the service.",
          syllabusRef: "1.2.a"
        },
        {
          id: 25,
          question: "Which is a purpose of the 'service desk' practice?",
          options: {
            A: "To reduce the likelihood and impact of incidents by identifying actual and potential causes of incidents",
            B: "To maximize the number of successful IT changes by ensuring risks are properly assessed",
            C: "To capture demand for incident resolution and service requests",
            D: "To set clear business-based targets for service performance"
          },
          correctAnswer: "C",
          explanation: "The purpose of the service desk practice is to capture demand for incident resolution and service requests.",
          syllabusRef: "6.1.n"
        },
        {
          id: 26,
          question: "How should an organization adopt continual improvement methods?",
          options: {
            A: "Use a new method for each improvement the organization handles",
            B: "Select a few key methods for the types of improvement that the organization handles",
            C: "Build the capability to use as many improvement methods as possible",
            D: "Select a single method for all improvements that the organization handles"
          },
          correctAnswer: "B",
          explanation: "It is a good idea to select a few key methods that are appropriate to the types of improvement the organization typically handles and to cultivate those methods.",
          syllabusRef: "7.1.a"
        },
        {
          id: 27,
          question: "Which ITIL concept describes governance?",
          options: {
            A: "The seven guiding principles",
            B: "The four dimensions of service management",
            C: "The service value chain",
            D: "The service value system"
          },
          correctAnswer: "D",
          explanation: "The components of the service value system are 'guiding principles', 'governance', 'service value chain', 'practices', and 'continual improvement'.",
          syllabusRef: "4.1"
        },
        {
          id: 28,
          question: "Which is a recommendation of the 'service desk' practice?",
          options: {
            A: "Service desks should avoid the use of automation",
            B: "Service desks should be highly technical",
            C: "Service desks should understand the wider organization",
            D: "Service desks should be a physical team in a single fixed location"
          },
          correctAnswer: "C",
          explanation: "Another key aspect of a good service desk is its practical understanding of the wider organization, the business processes, and the users.",
          syllabusRef: "7.1.f"
        },
        {
          id: 29,
          question: "Which guiding principle recommends organizing work into smaller, manageable sections that can be executed and completed in a timely manner?",
          options: {
            A: "Focus on value",
            B: "Start where you are",
            C: "Progress iteratively with feedback",
            D: "Collaborate and promote visibility"
          },
          correctAnswer: "C",
          explanation: "By organizing work into smaller, manageable sections that can be executed and completed in a timely manner, the focus on each effort will be sharper and easier to maintain.",
          syllabusRef: "2.2.c"
        },
        {
          id: 30,
          question: "What is a standard change?",
          options: {
            A: "A change that is well understood, fully documented and pre-authorized",
            B: "A change that needs to be assessed, authorized, and scheduled by a change authority",
            C: "A change that does not need a risk assessment because it is required to resolve an incident",
            D: "A change that is assessed, authorized, and scheduled as part of 'continual improvement'"
          },
          correctAnswer: "A",
          explanation: "These are low-risk, pre-authorized changes that are well understood and fully documented, and can be implemented without needing additional authorization.",
          syllabusRef: "7.1.b"
        },
        {
          id: 31,
          question: "What happens if a workaround becomes the permanent way of dealing with a problem that cannot be resolved cost-effectively?",
          options: {
            A: "A change request is submitted to change enablement",
            B: "Problem management restores the service as soon as possible",
            C: "The problem remains in the known error status",
            D: "The problem record is deleted"
          },
          correctAnswer: "C",
          explanation: "An effective incident workaround can become a permanent way of dealing with some problems when resolving the problem is not viable or cost-effective. In this case, the problem remains in the known error status.",
          syllabusRef: "7.1.d"
        },
        {
          id: 32,
          question: "What is the definition of change?",
          options: {
            A: "To add, modify or remove anything that could have a direct or indirect effect on services",
            B: "To ensure that accurate and reliable information about the configuration of services is available",
            C: "To make new and changed services and features available for use",
            D: "To move new or changed hardware, software, or any other component to live environments"
          },
          correctAnswer: "A",
          explanation: "A change is the addition, modification, or removal of anything that could have a direct or indirect effect on services.",
          syllabusRef: "6.2.d"
        },
        {
          id: 33,
          question: "What is the definition of an event?",
          options: {
            A: "Any change of state that has significance for the management of a service or other configuration item",
            B: "Any component that needs to be managed in order to deliver an IT service",
            C: "An unplanned interruption to a service or reduction in the quality of a service",
            D: "Any financially valuable component that can contribute to the delivery of an IT product or service"
          },
          correctAnswer: "A",
          explanation: "An event can be defined as any change of state that has significance for the management of a service or other configuration item (CI).",
          syllabusRef: "6.2.b"
        },
        {
          id: 34,
          question: "Which describes outcomes?",
          options: {
            A: "Tangible or intangible deliverables",
            B: "Functionality offered by a product or service",
            C: "Results desired by a stakeholder",
            D: "Configuration of an organization's resources"
          },
          correctAnswer: "C",
          explanation: "An outcome is 'a result for a stakeholder enabled by one or more outputs'.",
          syllabusRef: "1.2.d"
        },
        {
          id: 35,
          question: "Which is NOT a key focus of the 'information and technology' dimension?",
          options: {
            A: "Security and compliance",
            B: "Communication systems and knowledge bases",
            C: "Workflow management and inventory systems",
            D: "Roles and responsibilities"
          },
          correctAnswer: "D",
          explanation: "Roles and responsibilities are part of the 'organizations and people' dimension, not the 'information and technology' dimension.",
          syllabusRef: "3.1.b"
        },
        {
          id: 36,
          question: "Which practices are typically involved in the implementation of a problem resolution?\n1. Continual improvement\n2. Service request management\n3. Service level management\n4. Change enablement",
          options: {
            A: "1 and 2",
            B: "2 and 3",
            C: "3 and 4",
            D: "1 and 4"
          },
          correctAnswer: "D",
          explanation: "Problem management activities can identify improvement opportunities, and error control includes identification of potential permanent solutions which may result in a change request.",
          syllabusRef: "7.1.d"
        },
        {
          id: 37,
          question: "Which is a key consideration for the guiding principle 'keep it simple and practical'?",
          options: {
            A: "Try to create a solution for every exception",
            B: "Understand how each element contributes to value creation",
            C: "Ignore the conflicting objectives of different stakeholders",
            D: "Start with a complex solution, then simplify"
          },
          correctAnswer: "B",
          explanation: "When analysing a practice, process, service, metric, or other improvement target, always ask whether it contributes to value creation.",
          syllabusRef: "2.2.f"
        },
        {
          id: 38,
          question: "What should be done first when applying the 'focus on value' guiding principle?",
          options: {
            A: "Identify the outcomes that the service facilitates",
            B: "Identify all suppliers and partners involved in the service",
            C: "Determine who the service consumer is in each situation",
            D: "Determine the cost of providing the service"
          },
          correctAnswer: "C",
          explanation: "The first step in focusing on value is knowing who is being served. In each situation the service provider must, therefore, determine who the service consumer is.",
          syllabusRef: "2.2.a"
        },
        {
          id: 39,
          question: "A service provider describes a package that includes a laptop with software, licenses, and support. What is this package an example of?",
          options: {
            A: "Value",
            B: "An outcome",
            C: "Warranty",
            D: "A service offering"
          },
          correctAnswer: "D",
          explanation: "Service providers define combinations of goods, access to resources and service actions, to address the needs of different consumer groups. These combinations are called service offerings.",
          syllabusRef: "1.3.a"
        },
        {
          id: 40,
          question: "What is the definition of warranty?",
          options: {
            A: "A tangible or intangible deliverable that is produced by carrying out an activity",
            B: "The assurance that a product or service will meet agreed requirements",
            C: "A possible event that could cause harm or loss, or make it more difficult to achieve objectives",
            D: "The functionality offered by a product or service to meet a particular need"
          },
          correctAnswer: "B",
          explanation: "Warranty is 'assurance that a product or service will meet agreed requirements.'",
          syllabusRef: "1.1.c"
        }
      ]
    },
    sample2: {
      title: "ITIL Foundation Sample Paper 2",
      duration: 60, // minutes
      passMark: 26,
      totalQuestions: 40,
      questions: [
        {
          id: 41,
          question: "What is the effect of increased automation on the 'service desk' practice?",
          options: {
            A: "Greater ability to focus on customer experience when personal contact is needed",
            B: "Decrease in self-service incident logging and resolution",
            C: "Increased ability to focus on fixing technology instead of supporting people",
            D: "Elimination of the need to escalate incidents to support teams"
          },
          correctAnswer: "A",
          explanation: "With increased automation… The impact on service desks is reduced phone contact, less low-level work, and a greater ability to focus on excellent CX when personal contact is needed.",
          syllabusRef: "7.1.f"
        },
        {
          id: 42,
          question: "Which term describes the functionality offered by a service?",
          options: {
            A: "Cost",
            B: "Utility",
            C: "Warranty",
            D: "Risk"
          },
          correctAnswer: "B",
          explanation: "Utility is 'The functionality offered by a product or service.'",
          syllabusRef: "1.2.g"
        },
        {
          id: 43,
          question: "Which is the purpose of the 'monitoring and event management' practice?",
          options: {
            A: "To ensure that accurate and reliable information about the configuration of services is available when and where it is needed",
            B: "To systematically observe services and service components, and record and report selected changes of state",
            C: "To protect the information needed by the organization to conduct its business",
            D: "To minimize the negative impact of incidents by restoring normal service operation as quickly as possible"
          },
          correctAnswer: "B",
          explanation: "The purpose of the monitoring and event management practice is to systematically observe services and service components, and record and report selected changes of state identified as events.",
          syllabusRef: "6.1.e"
        },
        {
          id: 44,
          question: "What should all 'continual improvement' decisions be based on?",
          options: {
            A: "Details of how services are measured",
            B: "Accurate and carefully analysed data",
            C: "An up-to-date balanced scorecard",
            D: "A recent maturity assessment"
          },
          correctAnswer: "B",
          explanation: "Accurate data, carefully analysed and understood, is the foundation of fact-based decision-making for improvement.",
          syllabusRef: "7.1.a"
        },
        {
          id: 45,
          question: "How do all value chain activities transform inputs to outputs?",
          options: {
            A: "By determining service demand",
            B: "By using a combination of practices",
            C: "By using a single functional team",
            D: "By implementing process automation"
          },
          correctAnswer: "B",
          explanation: "To convert inputs into outputs, the value chain activities use different combinations of ITIL practices.",
          syllabusRef: "5.1"
        },
        {
          id: 46,
          question: "How does customer engagement contribute to the 'service level management' practice?\n1. It captures information that metrics can be based on\n2. It ensures the organization meets defined service levels\n3. It defines the workflows for service requests\n4. It supports progress discussions",
          options: {
            A: "1 and 2",
            B: "2 and 3",
            C: "3 and 4",
            D: "1 and 4"
          },
          correctAnswer: "D",
          explanation: "Customer engagement involves initial listening, discovery, and information capture on which to base metrics, measurement, and ongoing progress discussions.",
          syllabusRef: "7.1.g"
        },
        {
          id: 47,
          question: "What is the starting point for optimization?",
          options: {
            A: "Securing stakeholder engagement",
            B: "Understanding the vision and objectives of the organization",
            C: "Determining where the most positive impact would be",
            D: "Standardizing practices and services"
          },
          correctAnswer: "B",
          explanation: "The first step of the principle 'optimize and automate' is: Understand and agree the context in which the proposed optimization exists. This includes agreeing the overall vision and objectives of the organization.",
          syllabusRef: "2.2.g"
        },
        {
          id: 48,
          question: "Identify the missing words in the following sentence. The purpose of the [ ? ] is to ensure that the organization continually co-creates value with all stakeholders in line with the organization's objectives.",
          options: {
            A: "…'focus on value' guiding principle",
            B: "…four dimensions of service management",
            C: "…service value system",
            D: "…'service request management' practice"
          },
          correctAnswer: "C",
          explanation: "The purpose of the SVS is to ensure that the organization continually co-creates value with all stakeholders through the use and management of products and services.",
          syllabusRef: "4.1"
        },
        {
          id: 49,
          question: "Which practice provides support for managing feedback, compliments and complaints from users?",
          options: {
            A: "Change enablement",
            B: "Service request management",
            C: "Problem management",
            D: "Incident management"
          },
          correctAnswer: "B",
          explanation: "Each service request may include one or more of the following: ...feedback, compliments, and complaints.",
          syllabusRef: "7.1.e"
        },
        {
          id: 50,
          question: "Which joint activity performed by a service provider and service consumer ensures continual value co-creation?",
          options: {
            A: "Service provision",
            B: "Service consumption",
            C: "Service offering",
            D: "Service relationship management"
          },
          correctAnswer: "D",
          explanation: "Service relationship management is 'Joint activities performed by a service provider and a service consumer to ensure continual value co-creation based on agreed and available service offerings'.",
          syllabusRef: "1.3.b"
        },
        {
          id: 51,
          question: "Which practice may involve the initiation of disaster recovery?",
          options: {
            A: "Incident management",
            B: "Service request management",
            C: "Service level management",
            D: "IT asset management"
          },
          correctAnswer: "A",
          explanation: "In some extreme cases, disaster recovery plans may be invoked to resolve an incident.",
          syllabusRef: "7.1.c"
        },
        {
          id: 52,
          question: "What type of change is MOST likely to be managed by the 'service request management' practice?",
          options: {
            A: "A normal change",
            B: "An emergency change",
            C: "A standard change",
            D: "An application change"
          },
          correctAnswer: "C",
          explanation: "Fulfilment of service requests may include changes to services or their components; usually these are standard changes.",
          syllabusRef: "7.1.e"
        },
        {
          id: 53,
          question: "Which guiding principle emphasizes the need to understand the flow of work in progress, identify bottlenecks, and uncover waste?",
          options: {
            A: "Focus on value",
            B: "Collaborate and promote visibility",
            C: "Think and work holistically",
            D: "Keep it simple and practical"
          },
          correctAnswer: "B",
          explanation: "Collaborate and promote visibility states that the organization needs to perform critical analysis activities including: understanding the flow of work in progress; identifying bottlenecks, as well as excess capacity; and uncovering waste.",
          syllabusRef: "2.2.d"
        },
        {
          id: 54,
          question: "What is a means of enabling value co-creation by facilitating outcomes that customers want to achieve?",
          options: {
            A: "A service",
            B: "An output",
            C: "A practice",
            D: "Continual improvement"
          },
          correctAnswer: "A",
          explanation: "A service is 'A means of enabling value co-creation by facilitating outcomes that customers want to achieve, without the customer having to manage specific costs and risks.'",
          syllabusRef: "1.1.a"
        },
        {
          id: 55,
          question: "Which statement about change authorization is CORRECT?",
          options: {
            A: "A change authority should be assigned to each type of change and change model",
            B: "Centralizing change authorization to a single person is the most effective means of authorization",
            C: "The authorization of normal changes should be expedited to ensure they can be implemented quickly",
            D: "Standard changes are high risk and should be authorized by the highest level of change authority"
          },
          correctAnswer: "A",
          explanation: "It is essential that the correct change authority is assigned to each type of change to ensure that change enablement is both efficient and effective.",
          syllabusRef: "7.1.b"
        },
        {
          id: 56,
          question: "Which dimension of service management considers governance, management, and communication?",
          options: {
            A: "Organizations and people",
            B: "Information and technology",
            C: "Partners and suppliers",
            D: "Value streams and processes"
          },
          correctAnswer: "A",
          explanation: "It is important to ensure that the way an organization is structured and managed, as well as its roles, responsibilities, and systems of authority and communication, is well defined and supports its overall strategy and operating model.",
          syllabusRef: "3.1.a"
        },
        {
          id: 57,
          question: "Identify the missing word in the following sentence. A known error is a problem that has been [ ? ] and has not been resolved.",
          options: {
            A: "…logged",
            B: "…analysed",
            C: "…escalated",
            D: "…closed"
          },
          correctAnswer: "B",
          explanation: "A known error is 'A problem that has been analysed but has not been resolved'.",
          syllabusRef: "6.2.g"
        },
        {
          id: 58,
          question: "Which statement about known errors and problems is CORRECT?",
          options: {
            A: "Known error is the status assigned to a problem after it has been analysed",
            B: "A known error is the cause of one or more problems",
            C: "Known errors cause vulnerabilities, problems cause incidents",
            D: "Known errors are managed by technical staff, problems are managed by service management staff"
          },
          correctAnswer: "A",
          explanation: "Known errors are problems where initial analysis has been completed; it usually means that faulty components have been identified… the problem remains in the known error status.",
          syllabusRef: "7.1.d"
        },
        {
          id: 59,
          question: "What does the 'service request management' practice depend on for maximum efficiency?",
          options: {
            A: "Compliments and complaints",
            B: "Self-service tools",
            C: "Processes and procedures",
            D: "Incident management"
          },
          correctAnswer: "C",
          explanation: "Service request management is dependent upon well-designed processes and procedures, which are operationalized through tracking and automation tools to maximize the efficiency of the practice.",
          syllabusRef: "7.1.e"
        },
        {
          id: 60,
          question: "Which statement about the 'service desk' practice is CORRECT?",
          options: {
            A: "It provides a link with stakeholders at strategic and tactical levels",
            B: "It carries out change assessment and authorization",
            C: "It investigates the cause of incidents",
            D: "It needs a practical understanding of the business processes"
          },
          correctAnswer: "D",
          explanation: "Another key aspect of a good service desk is its practical understanding of the wider organization, the business processes, and the users.",
          syllabusRef: "7.1.f"
        },
        {
          id: 61,
          question: "Which practice ensures that accurate and reliable information is available about configuration items and the relationships between them?",
          options: {
            A: "Service configuration management",
            B: "Service desk",
            C: "IT asset management",
            D: "Monitoring and event management"
          },
          correctAnswer: "A",
          explanation: "The purpose of the service configuration management practice is to ensure that accurate and reliable information about the configuration of services, and the CIs that support them, is available when and where it is needed.",
          syllabusRef: "6.1.g"
        },
        {
          id: 62,
          question: "Which practice has a purpose that includes restoring normal service operation as quickly as possible?",
          options: {
            A: "Supplier management",
            B: "Deployment management",
            C: "Problem management",
            D: "Incident management"
          },
          correctAnswer: "D",
          explanation: "The purpose of the incident management practice is to minimize the negative impact of incidents by restoring normal service operation as quickly as possible.",
          syllabusRef: "6.1.k"
        },
        {
          id: 63,
          question: "Identify the missing word in the following sentence. A customer is the role that defines the requirements for a service and takes responsibility for the [ ? ] of service consumption.",
          options: {
            A: "…outputs",
            B: "…outcomes",
            C: "…costs",
            D: "…risks"
          },
          correctAnswer: "B",
          explanation: "Customer: The role that defines the requirements for a service and takes responsibility for the outcomes of service consumption.",
          syllabusRef: "1.1.d"
        },
        {
          id: 64,
          question: "Which guiding principle describes the importance of doing something, instead of spending a long time analysing different options?",
          options: {
            A: "Optimize and automate",
            B: "Start where you are",
            C: "Focus on value",
            D: "Progress iteratively with feedback"
          },
          correctAnswer: "D",
          explanation: "Progress iteratively with feedback recommends comprehending 'the whole, but do something: Sometimes the greatest enemy to progressing iteratively is the desire to understand and account for everything.'",
          syllabusRef: "2.2.c"
        },
        {
          id: 65,
          question: "What should be done for every problem?",
          options: {
            A: "It should be diagnosed to identify possible solutions",
            B: "It should be prioritized based on its potential impact and probability",
            C: "It should be resolved so that it can be closed",
            D: "It should have a workaround to reduce the impact"
          },
          correctAnswer: "B",
          explanation: "Problems are prioritized for analysis based on the risk that they pose, and are managed as risks based on their potential impact and probability.",
          syllabusRef: "7.1.d"
        },
        {
          id: 66,
          question: "How should an organization include third-party suppliers in the continual improvement of services?",
          options: {
            A: "Ensure suppliers include details of their approach to service improvement in contracts",
            B: "Require evidence that the supplier uses agile development methods",
            C: "Require evidence that the supplier implements all improvements using project management practices",
            D: "Ensure that all supplier problem management activities result in improvements"
          },
          correctAnswer: "A",
          explanation: "When contracting for a supplier's service, the contract should include details of how they will measure, report on, and improve their services over the life of the contract.",
          syllabusRef: "7.1.a"
        },
        {
          id: 67,
          question: "What considerations influence the supplier strategy of an organization?",
          options: {
            A: "Contracts and agreements",
            B: "Type of cooperation with suppliers",
            C: "Corporate culture of the organization",
            D: "Level of formality"
          },
          correctAnswer: "C",
          explanation: "Corporate culture: some organizations have a historical preference for one approach over another. Long-standing cultural bias is difficult to change without compelling reasons.",
          syllabusRef: "3.1.c"
        },
        {
          id: 68,
          question: "What is a problem?",
          options: {
            A: "An addition or modification that could have an effect on services",
            B: "Any change of state that has significance for the management of a configuration item",
            C: "A cause or potential cause of one or more incidents",
            D: "An unplanned reduction in the quality of a service"
          },
          correctAnswer: "C",
          explanation: "A problem is 'a cause, or potential cause, of one or more incidents.'",
          syllabusRef: "6.2.f"
        },
        {
          id: 69,
          question: "What is the purpose of the 'relationship management' practice?",
          options: {
            A: "To align the organization's practices and services with changing business needs",
            B: "To establish and nurture the links between the organization and its stakeholders at strategic and tactical levels",
            C: "To reduce the likelihood and impact of incidents by identifying actual and potential causes of incidents, and managing workarounds and known errors",
            D: "To minimize the negative impact of incidents by restoring normal service operation as quickly as possible"
          },
          correctAnswer: "B",
          explanation: "The purpose of the relationship management practice is to establish and nurture the links between the organization and its stakeholders at strategic and tactical levels.",
          syllabusRef: "6.1.b"
        },
        {
          id: 70,
          question: "Which is intended to help an organization adopt and adapt ITIL guidance?",
          options: {
            A: "The four dimensions of service management",
            B: "The guiding principles",
            C: "The service value chain",
            D: "Practices"
          },
          correctAnswer: "B",
          explanation: "The guiding principles can guide organizations in their work as they adopt a service management approach and adapt ITIL guidance to their own specific needs and circumstances.",
          syllabusRef: "2.1"
        },
        {
          id: 71,
          question: "What is an output?",
          options: {
            A: "A change of state that has significance for the management of a configuration item",
            B: "A possible event that could cause harm or loss",
            C: "A result for a stakeholder",
            D: "Something created by carrying out an activity"
          },
          correctAnswer: "D",
          explanation: "An output is 'A tangible or intangible deliverable of an activity'.",
          syllabusRef: "1.2.e"
        },
        {
          id: 72,
          question: "What is the reason for using a balanced bundle of service metrics?",
          options: {
            A: "It reduces the number of metrics that need to be collected",
            B: "It reports each service element separately",
            C: "It provides an outcome-based view of services",
            D: "It facilitates the automatic collection of metrics"
          },
          correctAnswer: "C",
          explanation: "They should relate to defined outcomes and not simply operational metrics. This can be achieved with balanced bundles of metrics.",
          syllabusRef: "7.1.g"
        },
        {
          id: 73,
          question: "Why should incidents be prioritized?",
          options: {
            A: "To help automated matching of incidents to problems or known errors",
            B: "To identify which support team the incident should be escalated to",
            C: "To ensure that incidents with the highest business impact are resolved first",
            D: "To encourage a high level of collaboration within and between teams"
          },
          correctAnswer: "C",
          explanation: "Incidents are prioritized based on an agreed classification to ensure that incidents with the highest business impact are resolved first.",
          syllabusRef: "7.1.c"
        },
        {
          id: 74,
          question: "Which practice has a purpose that includes helping the organization to maximize value, control costs and manage risks?",
          options: {
            A: "Relationship management",
            B: "IT asset management",
            C: "Release management",
            D: "Service desk"
          },
          correctAnswer: "B",
          explanation: "The purpose of the IT asset management practice is to plan and manage the full lifecycle of all IT assets, to help the organization: maximize value, control costs, manage risks.",
          syllabusRef: "6.1.d"
        },
        {
          id: 75,
          question: "Why should service desk staff detect recurring issues?",
          options: {
            A: "To help identify problems",
            B: "To escalate incidents to the correct support team",
            C: "To ensure effective handling of service requests",
            D: "To engage the correct change authority"
          },
          correctAnswer: "A",
          explanation: "Problem identification activities identify and log problems. These include:... detection of duplicate and recurring issues by users, service desk, and technical support staff.",
          syllabusRef: "7.1.d"
        },
        {
          id: 76,
          question: "Which value chain activity communicates the current status of all four dimensions of service management?",
          options: {
            A: "Improve",
            B: "Engage",
            C: "Obtain/build",
            D: "Plan"
          },
          correctAnswer: "D",
          explanation: "The purpose of the plan value chain activity is to ensure a shared understanding of the vision, current status, and improvement direction for all four dimensions.",
          syllabusRef: "5.2.a"
        },
        {
          id: 77,
          question: "Which guiding principle is PRIMARILY concerned with consumer's revenue and growth?",
          options: {
            A: "Keep it simple and practical",
            B: "Optimize and automate",
            C: "Progress iteratively with feedback",
            D: "Focus on value"
          },
          correctAnswer: "D",
          explanation: "This section is mostly focused on the creation of value for service consumers... This value may come in various forms, such as revenue, customer loyalty, lower cost, or growth opportunities.",
          syllabusRef: "2.2.a"
        },
        {
          id: 78,
          question: "Which practice provides visibility of the organization's services by capturing and reporting on service performance?",
          options: {
            A: "Service desk",
            B: "Service level management",
            C: "Service request management",
            D: "Service configuration management"
          },
          correctAnswer: "B",
          explanation: "Service level management provides the end-to-end visibility of the organization's services. To achieve this, service level management:... captures and reports on service issues, including performance against defined service levels.",
          syllabusRef: "7.1.g"
        },
        {
          id: 79,
          question: "Which is the BEST example of an emergency change?",
          options: {
            A: "The implementation of a planned new release of a software application",
            B: "A low-risk computer upgrade implemented as a service request",
            C: "The implementation of a security patch to a critical software application",
            D: "A scheduled major hardware and software implementation"
          },
          correctAnswer: "C",
          explanation: "Emergency changes are changes that must be implemented as soon as possible; for example, to resolve an incident or implement a security patch.",
          syllabusRef: "7.1.b"
        },
        {
          id: 80,
          question: "Which guiding principle recommends assessing the current state and deciding what can be reused?",
          options: {
            A: "Focus on value",
            B: "Start where you are",
            C: "Collaborate and promote visibility",
            D: "Progress iteratively with feedback"
          },
          correctAnswer: "B",
          explanation: "The guiding principle 'start where you are' advises 'Having a proper understanding of the current state of services and methods is important to selecting which elements to re-use, alter, or build upon.'",
          syllabusRef: "2.2.b"
        }
      ]
    }
  },
  
  // Helper function to get all questions as single array
  getAllQuestions: function() {
    return [
      ...this.exams.sample1.questions,
      ...this.exams.sample2.questions
    ];
  },
  
  // Helper function to get questions by topic
  getQuestionsByTopic: function(topic) {
    const allQuestions = this.getAllQuestions();
    return allQuestions.filter(q => q.syllabusRef && q.syllabusRef.includes(topic));
  },
  
  // Helper function to get random questions
  getRandomQuestions: function(count) {
    const allQuestions = this.getAllQuestions();
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  },
  
  // Helper function to validate answer
  checkAnswer: function(questionId, userAnswer) {
    const allQuestions = this.getAllQuestions();
    const question = allQuestions.find(q => q.id === questionId);
    return question && question.correctAnswer === userAnswer;
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = itilQuestions;
}