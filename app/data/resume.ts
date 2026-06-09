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
  "운영 안정성과 데이터 정합성에 집착하는 백엔드 엔지니어입니다. 해운·선박 운항 데이터 SaaS의 검증 Backoffice 백엔드를 단독으로 설계·운영하며, 운영팀이 수동으로 확인하던 데이터 정합성 검증을 자동화했습니다.",

  "대규모 Express 레거시 서버를 NestJS DI 기반 아키텍처로 단독 마이그레이션하고, 이후에도 도메인 모델 통일·타입 안전성 강화·응답 파이프라인 최적화를 이어가며 운영 신뢰성을 끌어올리고 있습니다. 단순 기능 개발을 넘어 운영 안정성과 자동화로 서비스 품질에 기여하는 엔지니어로 성장하고자 합니다.",
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
    period: "2026.05 ~ 현재",
    title: "핵심 운항 보고 템플릿 데이터 정규화",
    subtitle:
      "시스템 중심 설정 테이블 정규화 — 정합성·확장성·조회 성능 개선 (분석·설계·DDL 완료, 데이터 이전 진행 중)",
    descriptions: [
      "전 선박의 일일 보고 구조가 파생되는 시스템 핵심 설정 테이블(약 5,500행)을 분석·재설계 — 수집 필드를 콤마 문자열 한 칸에 뭉쳐 저장(행당 최대 303개·총 약 48만 개)해 FK·정합성이 전혀 보장되지 않던 구조",
      "실제 데이터로 함수 종속·중복·고아 키를 검증한 뒤, 단일 비정규화 테이블을 마스터(이벤트·필드 사전)에 FK로 연결한 4개 테이블(3NF)로 정규화 (런타임 동적 필드는 베이스 키로 분리해 비즈니스 로직과 격리)",
      "콤마 문자열을 조회 가능한 행으로 분해해, '특정 필드를 사용하는 이벤트 전체 조회' 같은 질의를 문자열 전체 스캔 → 인덱스 조회로 전환",
      "UNIQUE·FK 제약으로 행 내 중복 필드(32건)·비표준 키 등 기존엔 막지 못하던 정합성 문제를 DB 레벨에서 원천 차단",
    ],
    skills: [
      "MSSQL",
      "Database Design",
      "Normalization (3NF)",
      "Data Migration",
      "Query Optimization",
    ],
  },
  {
    period: "2026.02 ~ 2026-05",
    title: "Express → NestJS 마이그레이션 및 후속 안정화",
    subtitle: "약 100개 엔드포인트·84,000 LOC 레거시 백엔드 마이그레이션 → 도메인 통일·타입 안전성·응답 성능 개선",
    descriptions: [
      "싱글톤 기반 Express 서버(약 100개 엔드포인트·84,000 LOC)를 NestJS DI 기반 모듈 구조로 단독 마이그레이션",
      "인터셉터·예외 필터로 공통 응답·에러 처리를 일원화하고, DTO + class-validator로 런타임 입력 검증 적용",
      "DI로 서비스 계층을 분리해 단위 테스트 가능 구조를 확보하고 TDD 도입 — 결합도를 낮춰 유지보수성 향상",
      "이후 도메인 정리에 착수 — 4종으로 분기되던 핵심 엔티티를 단일 모델로 통일(16개 모듈 정리)하고, any·ts-ignore 캐스팅을 제거해 입력 오류를 컴파일 단계에서 차단",
      "주요 조회 API의 직렬 IO를 병렬화해 응답 경로를 최적화하고, 1,903줄 단일 서비스를 역할별 3개로 분리하며 정합성 버그 다수 발견·수정",
    ],
    skills: [
      "NestJS",
      "TypeScript",
      "Express",
      "DI",
      "TDD",
      "Domain Modeling",
      "Clean Architecture",
      "Performance Optimization",
    ],
  },
  {
    period: "2025.06 ~ 2025.12",
    title: "선박 운항 데이터 검증 Backoffice 시스템",
    subtitle: "운영 데이터 적재·정합성 검증 자동화 (백엔드 단독 담당)",
    descriptions: [
      "선박당 1,000개 이상의 운항 리포트(JSON)를 Blob Storage → Cosmos DB로 적재·정형화하는 파이프라인의 검증 Backoffice 백엔드를 단독 설계·구현",
      "운영팀이 엑셀로 수동 비교하던 정합성 검증을 자동화하여, 하루가 걸리던 작업을 1시간 이내로 단축",
      "원천 데이터와 가공 데이터의 차이를 자동 탐지·리포팅해 운영 이슈를 조기에 발견",
      "테스트 시 운항 리포트를 일일이 수작업 세팅하던 과정을 복사·자동 데이터 세팅 도구로 대체해 테스트 준비 시간을 단축",
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
  {
    category: "Frontend (참고)",
    items: ["React", "Flutter"],
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