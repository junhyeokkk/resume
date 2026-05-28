export interface Profile {
  name: string;
  role: string;
  email: string;
  phone: string;
  github: string;
  blog: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  status?: string;
  descriptions: string[];
  skills: string[];
}

export interface Project {
  period: string;
  title: string;
  subtitle: string;
  descriptions: string[];
  skills: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Education {
  period: string;
  school: string;
  major: string;
  description: string;
}

export interface Training {
  period: string;
  title: string;
  subtitle: string;
}

export interface FeaturedProjectLink {
  label: string;
  href: string;
}

export interface FeaturedProject {
  title: string;
  tagline: string;
  period: string;
  team: string;
  role: string;
  summary: string;
  highlights: string[];
  skills: string[];
  links: FeaturedProjectLink[];
}

export const profile: Profile = {
  name: "최준혁",
  role: "Backend Systems Engineer",
  email: "loveu9911111@gmail.com",
  phone: "010-3450-7418",
  github: "https://github.com/junhyeokkk",
  blog: "https://junhyeokkk.tistory.com",
};

export const introduce: string[] = [
  "Node.js 기반 백엔드 개발자로서 데이터 처리 및 검증 자동화 시스템 개발을 중심으로 다양한 서비스 운영 경험을 보유하고 있습니다. 특히 Azure 환경에서 Blob Storage, Cosmos DB 등을 활용한 데이터 동기화 및 검증 로직을 설계하고 안정적인 서비스 운영을 위한 백엔드 구조 개선을 수행해 왔습니다.",

  "Express 기반 서버 구조를 NestJS 아키텍처로 마이그레이션하며 의존성 주입, 모듈 구조 설계, 인터셉터 기반 공통 응답 처리 등 유지보수성과 확장성을 고려한 백엔드 구조 개선을 진행하였습니다. 또한 대용량 JSON 데이터 처리, 로그 검증 자동화, Blob 기반 데이터 비교 로직 등 데이터 중심 서비스 개발 경험을 보유하고 있습니다.",

  "단순 기능 개발을 넘어 서비스 안정성과 운영 효율을 개선하는 백엔드 개발을 지향합니다. 반복적인 검증 작업 자동화, 장애 원인 분석 도구 개발, 데이터 정합성 검증 시스템 구축 등을 통해 실제 운영 환경에서 문제 해결 중심의 개발 경험을 쌓아왔습니다.",

  "백엔드 개발자로서 기술적 완성도뿐 아니라 서비스 전체 흐름을 이해하고 제품 관점에서 문제를 해결하는 개발자로 성장하고자 합니다. 안정적인 아키텍처 설계와 지속 가능한 코드 구조를 기반으로 서비스 품질 향상에 기여하는 것을 목표로 합니다.",
];

export const experiences: Experience[] = [
  {
    company: "(주) 랩오투원",
    position: "백엔드 개발자",
    period: "2025.04 ~ 현재",
    status: "재직 중",
    descriptions: [
      "선박 데이터 관리 및 검증을 위한 Backoffice 시스템 구축",
      "Express 기반 레거시 서버를 NestJS 기반 아키텍처로 마이그레이션",
      "Jenkins 기반 Azure App Service CI/CD 파이프라인 구축",
      "운영 데이터 비교 및 검증 자동화 기능 구현",
    ],
    skills: [
      "Node.js",
      "TypeScript",
      "NestJS",
      "Express",
      "MSSQL",
      "Azure Cosmos DB",
      "Azure Blob Storage",
      "Jenkins",
    ],
  },
];

export const projects: Project[] = [
  {
    period: "2026.02 ~ 2026.04",
    title: "Express → NestJS 서버 마이그레이션",
    subtitle: "레거시 백엔드 구조 개선",
    descriptions: [
      "Express 기반 레거시 서버를 NestJS 아키텍처로 마이그레이션",
      "DI 기반 모듈 구조 설계 및 서비스 계층 분리",
      "공통 응답 인터셉터 및 예외 처리 구조 개선",
    ],
    skills: [
      "NestJS",
      "TypeScript",
      "DI",
      "Architecture",
    ],
  },
  {
    period: "2026.01 ~ 2026.02",
    title: "NestJS 신규 서버 CI/CD 구축",
    subtitle: "Azure App Service 자동 배포 파이프라인",
    descriptions: [
      "NestJS 신규 서버 Jenkins 기반 CI/CD 파이프라인 구축",
      "Azure App Service 자동 배포 및 환경 분리 구성",
      "Docker 기반 빌드 및 배포 자동화 프로세스 구현",
    ],
    skills: [
      "NestJS",
      "Jenkins",
      "Azure App Service",
      "Docker",
      "CI/CD",
    ],
  },
  {
    period: "2025.06 ~ 2025.12",
    title: "선박 데이터 검증 Backoffice 시스템 구축",
    subtitle: "운영 데이터 검증 및 관리 시스템",
    descriptions: [
      "선박 데이터 조회 및 검증 관리 Backoffice 시스템 설계 및 구축",
      "Cosmos DB / Blob Storage 데이터 비교 검증 기능 개발",
      "운영 데이터 정합성 자동 검증 및 이슈 탐지 로직 구현",
    ],
    skills: [
      "Node.js",
      "TypeScript",
      "NestJS",
      "Azure Cosmos DB",
      "Azure Blob Storage",
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Java"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["Node.js", "NestJS", "Express", "Spring Boot", "React"],
  },
  {
    category: "Infrastructure & Databases",
    items: [
      "Azure",
      "Azure App Service",
      "Azure Blob Storage",
      "Azure Cosmos DB",
      "MSSQL",
      "Redis",
      "Docker",
    ],
  },
  {
    category: "Tools",
    items: ["Jenkins", "Git", "GitHub", "VS Code", "Bitbucket", "Jira", "Confluence"],
  },
];

export const educations: Education[] = [
  {
    period: "2018.03 ~ 2022.02",
    school: "동의대학교",
    major: "컴퓨터공학과",
    description: "학사 졸업",
  },
  {
    period: "2015.03 ~ 2018.02",
    school: "부산 신정고등학교",
    major: "",
    description: "졸업",
  },
];

export const trainings: Training[] = [
  {
    period: "2024.12 ~ 2025.03",
    title: "[K-디지털사업] 생성형 AI 활용 웹·앱 개발 실무과정",
    subtitle:
      "Spring Boot 기반 웹개발 및 Flutter 기반 앱개발 실무양성 과정",
  },
  {
    period: "2024.06 ~ 2024.12",
    title: "[K-디지털사업] 프로젝트 기반 백엔드 웹 개발 과정",
    subtitle:
      "(롯데) 기업맞춤형 자바·스프링 웹 SW 개발자 양성과정",
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Pingo",
    tagline: "위치 기반 소셜 데이팅 앱 · Flutter + Spring Boot",
    period: "2025.01 ~ 2025.03",
    team: "4명",
    role: "백엔드 · 위치/매칭 시스템",
    summary:
      "주변 사용자를 추천하고 호감 표시·매칭 후 채팅으로 이어지는 소셜 데이팅 앱. 위치 기반 추천과 스와이프 매칭 시스템의 백엔드를 설계·구현했습니다.",
    highlights: [
      "Kafka 비동기 + CompletableFuture 병렬 처리로 스와이프 API 응답 약 50% 단축, TPS 2배 향상 (JMeter 1,000명 기준 3.8s → 1.2s)",
      "Redis + Oracle(SDO_GEOM) 기반 위치 매칭 설계, 500m 이상 이동 시에만 DB 갱신해 불필요한 트랜잭션 최소화",
      "상호 호감 시 매칭 처리 및 WebSocket 실시간 알림·채팅방 자동 생성",
      "Redis–Oracle 위치 데이터 정합성 문제 해결 (Oracle 갱신 성공 시에만 Redis 반영)",
    ],
    skills: [
      "Spring Boot",
      "Flutter",
      "Kafka",
      "Redis",
      "Oracle",
      "MongoDB",
      "WebSocket/STOMP",
      "Riverpod",
      "AWS EC2",
      "Docker",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/junhyeokkk/Pingo" },
      {
        label: "회고록",
        href: "https://www.notion.so/Pingo-1ac1fede2636805cb27ed218f00a75d3",
      },
      { label: "시연 영상", href: "https://www.youtube.com/watch?v=b9xO2-tBJ1s" },
    ],
  },
  {
    title: "Antwork",
    tagline: "사내 그룹웨어 · React + Spring Boot",
    period: "2024.11 ~ 2024.12",
    team: "7명",
    role: "백엔드 · 배포·인증·공통 기능",
    summary:
      "프로젝트·채팅·캘린더·전자결재·드라이브 등을 갖춘 사내 그룹웨어. 서버 배포와 인증, 근태·전자결재, 접근 로그 등 백엔드 핵심 기능을 담당했습니다.",
    highlights: [
      "AWS EC2 + GitHub Actions 기반 CI/CD 구축 (JAR 빌드·전송·자동 실행 자동화)",
      "Spring Security/JWT 인증 구현 — JwtAuthenticationFilter/Provider, Refresh Token httpOnly 쿠키 자동 갱신",
      "Spring AOP + Kafka → MongoDB 비동기 접근 로그 시스템 구축 및 검색 최적화",
      "EC2 채굴 악성 컨테이너 침해 탐지·제거 및 방화벽·보안그룹 강화로 서버 안정화",
    ],
    skills: [
      "Spring Boot",
      "Spring Security/JWT",
      "Spring AOP",
      "JPA",
      "React",
      "Kafka",
      "Redis",
      "MySQL",
      "MongoDB",
      "GitHub Actions",
      "AWS EC2",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/junhyeokkk/Antwork" },
      {
        label: "회고록",
        href: "https://www.notion.so/AntWork-1ab1fede263680a98533df2ad685f0ee",
      },
      { label: "시연 영상", href: "https://www.youtube.com/watch?v=awnQofAVuoo" },
    ],
  },
];