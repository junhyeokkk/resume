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
  companyTagline?: string;
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
  role: "Backend Engineer",
  email: "loveu9911111@gmail.com",
  phone: "010-3450-7418",
  github: "https://github.com/junhyeokkk",
  blog: "https://junhyeokkk.tistory.com",
};

export const introduce: string[] = [
  "운영 안정성과 데이터 정합성에 집착하는 백엔드 엔지니어입니다. 해운·선박 운항 데이터 SaaS에서 선박 한 척당 1,000개 이상의 JSON 리포트를 Azure Blob Storage·Cosmos DB로 적재하고 비교 검증하는 Backoffice 시스템의 백엔드를 단독으로 설계·운영하며, 운영팀이 하루를 들여 수동으로 확인하던 정합성 검증을 1시간 이내로 단축했습니다.",

  "약 100개 엔드포인트·84,000 LOC 규모의 Express 레거시 서버를 NestJS DI 기반 아키텍처로 단독 마이그레이션해 인터셉터·예외 필터 기반 공통 처리와 TDD를 도입했습니다. 마이그레이션 이후에도 도메인 모델 통일·타입 안전성 강화·응답 파이프라인 최적화를 이어가며 운영 신뢰성을 끌어올리고 있습니다. 부트캠프 팀 프로젝트에서는 Kafka 비동기와 CompletableFuture 병렬 처리로 매칭 API 응답을 약 50% 단축한 경험이 있으며, 단순 기능 개발을 넘어 운영 안정성과 자동화로 서비스 품질에 기여하는 엔지니어로 성장하고자 합니다.",
];

export const experiences: Experience[] = [
  {
    company: "(주) 랩오투원",
    companyTagline: "해운·선박 운항 데이터 SaaS",
    position: "백엔드 개발자 (주니어 · 정직원)",
    period: "2025.04 ~ 현재",
    status: "재직 중",
    descriptions: [
      "선박 운항 리포트(JSON, 선박당 1,000개 이상) 적재·정합성 검증 Backoffice 시스템의 백엔드를 단독으로 설계·운영",
      "운영팀이 엑셀로 수시 수동 비교하던 데이터 정합성 검증을 자동화하여, 하루가 걸리던 작업을 1시간 이내로 단축",
      "약 100개 엔드포인트·84,000 LOC 규모의 Express 레거시 서버를 NestJS DI 기반으로 단독 마이그레이션 — 인터셉터·예외 필터·DTO 검증으로 공통 처리 일원화, TDD 도입",
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
    period: "2026.04 ~ 현재",
    title: "마이그레이션 후속 도메인 정리 및 타입 안전성 강화",
    subtitle: "핵심 도메인 통일화·응답 파이프라인 최적화·타입 사슬 정합",
    descriptions: [
      "이전·신규 DB 구조 혼재로 4종으로 분기되던 동일 도메인 엔티티를 단일화하고, 영향받는 16개 모듈의 속성 접근 경로를 일괄 정정",
      "도메인 상수에서 union 타입을 자동 도출해 7개 서비스·18개 함수 시그니처에 전파, 누적된 any·ts-ignore 캐스팅 사슬을 제거하며 컴파일 타임 입력 검증 강화",
      "주요 조회 API의 직렬 IO 9건을 Promise.all로 병렬화하고, 반복 lookup을 O(n) filter → O(1) Map 인덱스로 전환",
      "응답 조립을 8단계 Step으로 재구성하며 중복 lookup·dead null-guard·무의미한 try/catch·dead code를 정리하고 진입점 명시적 에러 처리로 전환 — silent failure·catch swallow·ts-ignore가 가린 정합성 버그 다수 진단·수정",
      "1,903줄 단일 도메인 서비스를 역할별 3개로 분리·DI 재구성하고, 외부 인프라(NoSQL·Blob Storage) 직접 의존을 전용 Loader로 위임해 계층 책임 분리",
    ],
    skills: [
      "TypeScript",
      "NestJS",
      "Domain Modeling",
      "Type-Driven Refactoring",
      "Performance Optimization",
      "Clean Architecture",
      "class-transformer",
    ],
  },
  {
    period: "2026.02 ~ 2026.04",
    title: "Express → NestJS 단독 마이그레이션",
    subtitle: "약 100개 엔드포인트·84,000 LOC 레거시 백엔드 구조 개선",
    descriptions: [
      "싱글톤 기반 Express 서버(약 100개 엔드포인트, 1,000개 TS 파일, 84,000 LOC)를 NestJS DI 기반 모듈 구조로 단독 마이그레이션",
      "인터셉터·예외 필터로 공통 응답·에러 처리를 일원화하고 미들웨어 남용을 방지, DTO + class-validator로 런타임 입력 검증 적용",
      "DI 기반으로 서비스 계층을 분리해 단위 테스트 가능성을 확보하고 TDD 도입, 결합도를 낮춰 신규 기능 추가 시 유지보수성 향상",
    ],
    skills: [
      "NestJS",
      "TypeScript",
      "Express",
      "DI",
      "TDD",
      "class-validator",
    ],
  },
  {
    period: "2025.06 ~ 2025.12",
    title: "선박 운항 데이터 검증 Backoffice 시스템",
    subtitle: "운영 데이터 적재·정합성 검증 자동화 (백엔드 단독 담당)",
    descriptions: [
      "선박 운항 리포트(JSON, 선박당 1,000개 이상·파일당 500~1,500줄)를 Azure Blob Storage에 적재 → 해운 운항 계산을 거쳐 Cosmos DB에 정형화 저장하는 파이프라인의 검증 Backoffice 백엔드 설계·구현",
      "운영팀이 엑셀로 수시 수동 비교하던 정합성 검증을 자동화하여, 하루가 걸리던 작업을 1시간 이내로 단축",
      "Blob 원천 데이터와 Cosmos 가공 데이터의 차이를 자동 탐지·리포팅하는 검증 로직을 구현해 운영 이슈를 조기에 발견",
    ],
    skills: [
      "Node.js",
      "TypeScript",
      "NestJS",
      "Azure Blob Storage",
      "Azure Cosmos DB",
      "MSSQL",
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
    items: [
      "Node.js",
      "NestJS",
      "Express",
      "Spring Boot",
      "Spring Security / JWT",
      "Spring AOP",
      "JPA",
      "React",
      "Flutter",
    ],
  },
  {
    category: "Databases & Messaging",
    items: [
      "MSSQL",
      "Azure Cosmos DB",
      "MongoDB",
      "MySQL",
      "Oracle",
      "Redis",
      "Kafka",
      "WebSocket / STOMP",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      "Azure App Service",
      "Azure Blob Storage",
      "AWS EC2",
      "Docker",
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      "Jenkins",
      "GitHub Actions",
      "Git",
      "GitHub",
      "Bitbucket",
      "Jira",
      "Confluence",
    ],
  },
];

export const educations: Education[] = [
  {
    period: "2018.03 ~ 2022.02",
    school: "동의대학교",
    major: "컴퓨터공학과",
    description: "학사 졸업",
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
    tagline: "위치 기반 소셜 데이팅 앱 · K-디지털 부트캠프 팀 프로젝트 (Flutter · Spring Boot)",
    period: "2025.01 ~ 2025.03",
    team: "4명",
    role: "백엔드·프론트엔드(Flutter) · 위치/매칭 시스템",
    summary:
      "주변 사용자를 추천하고 호감 표시·매칭 후 채팅으로 이어지는 소셜 데이팅 앱. 위치 기반 추천과 스와이프 매칭 시스템의 백엔드 설계·구현을 주도하고, Flutter 클라이언트(매칭/채팅 화면)도 함께 개발했습니다.",
    highlights: [
      "Kafka 비동기 + CompletableFuture 병렬 처리로 스와이프 API 응답 약 50% 단축, TPS 2배 향상 (JMeter 1,000명 기준 3.8s → 1.2s)",
      "Redis + Oracle(SDO_GEOM) 기반 위치 매칭 설계, 500m 이상 이동 시에만 DB 갱신해 불필요한 트랜잭션 최소화",
      "상호 호감 시 매칭 처리 및 WebSocket 실시간 알림·채팅방 자동 생성",
      "Redis–Oracle 위치 데이터 정합성 문제 해결 (Oracle 갱신 성공 시에만 Redis 반영)",
      "Flutter 클라이언트의 매칭 스와이프 UI 구현 및 위치 권한 요청·백그라운드 갱신 흐름 처리",
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
    tagline: "사내 그룹웨어 · K-디지털 부트캠프 팀 프로젝트 (React · Spring Boot)",
    period: "2024.11 ~ 2024.12",
    team: "7명",
    role: "백엔드·프론트엔드(React) · 배포·인증·공통 기능",
    summary:
      "프로젝트·채팅·캘린더·전자결재·드라이브 등을 갖춘 사내 그룹웨어. 서버 배포와 인증, 근태·전자결재, 접근 로그 등 백엔드 핵심 기능과 담당 도메인의 React 화면을 함께 개발했습니다.",
    highlights: [
      "AWS EC2 + GitHub Actions 기반 CI/CD 구축 (JAR 빌드·전송·자동 실행 자동화)",
      "Spring Security/JWT 인증 구현 — JwtAuthenticationFilter/Provider, Refresh Token httpOnly 쿠키 자동 갱신",
      "Spring AOP + Kafka → MongoDB 비동기 접근 로그 시스템 구축 및 검색 최적화",
      "EC2 채굴 악성 컨테이너 침해 탐지·제거 및 방화벽·보안그룹 강화로 서버 안정화",
      "담당 도메인의 React 화면 구현 — 전자결재 작성·조회, 근태 신청·조회, 로그인 폼 및 JWT 기반 권한 라우팅",
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