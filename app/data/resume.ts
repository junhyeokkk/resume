export interface Profile {
  name: string;
  role: string;
  headline: string;
  email: string;
  phone: string;
  github: string;
  blog: string;
}

export interface HighlightStat {
  value: string;
  label: string;
  description: string;
  icon: "automation" | "migration" | "database" | "fullstack";
}

export interface Bullet {
  lead: string;
  detail: string;
}

export interface Experience {
  company: string;
  companyTagline?: string;
  position: string;
  period: string;
  status?: string;
  descriptions: Bullet[];
  skills: string[];
}

export interface Project {
  period: string;
  title: string;
  subtitle: string;
  descriptions: Bullet[];
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
  highlights: Bullet[];
  skills: string[];
  links: FeaturedProjectLink[];
}

export const profile: Profile = {
  name: "최준혁",
  role: "Backend Engineer",
  headline:
    "대용량 데이터 파이프라인의 적재·정합성 검증 자동화와 레거시 시스템 안정화에 강한 백엔드 엔지니어입니다.",
  email: "loveu9911111@gmail.com",
  phone: "010-3450-7418",
  github: "https://github.com/junhyeokkk",
  blog: "https://junhyeokkk.tistory.com",
};

export const highlightStats: HighlightStat[] = [
  {
    value: "1일 → 1시간",
    label: "데이터 검증 자동화",
    description: "수동 대조하던 정합성 검증을 자동 탐지·배치로 무인화",
    icon: "automation",
  },
  {
    value: "84K LOC",
    label: "레거시 단독 마이그레이션",
    description: "Express → NestJS DI 구조로 이관 (API 약 100개)",
    icon: "migration",
  },
  {
    value: "48만 필드",
    label: "설정 데이터 3NF 정규화",
    description: "콤마 문자열을 FK 기반 4개 테이블로 재설계",
    icon: "database",
  },
  {
    value: "풀스택 단독",
    label: "리포트 저작 도구 구축",
    description: "운영팀이 보고 양식을 직접 생성 — 개발 병목 제거",
    icon: "fullstack",
  },
];

export const introduce: string[] = [
  "운영 안정성과 데이터 정합성에 집착하는 백엔드 엔지니어입니다. 대용량 데이터 기반 SaaS의 검증 Backoffice 백엔드를 단독으로 설계·운영하며, 운영팀이 수동으로 확인하던 데이터 정합성 검증을 자동화했습니다.",

  "대규모 Express 레거시 서버를 NestJS DI 기반 아키텍처로 단독 마이그레이션하고, 이후에도 도메인 모델 통일·타입 안전성 강화·응답 파이프라인 최적화를 이어가며 운영 신뢰성을 끌어올리고 있습니다. 단순 기능 개발을 넘어 운영 안정성과 자동화로 서비스 품질에 기여하는 엔지니어로 성장하고자 합니다.",
];

export const experiences: Experience[] = [
  {
    company: "(주) 랩오투원",
    companyTagline: "대용량 운영 데이터 SaaS",
    position: "백엔드 개발자 (주니어 · 정직원)",
    period: "2025.04 ~ 현재",
    status: "재직 중",
    descriptions: [
      {
        lead: "검증 Backoffice 단독 소유",
        detail: "대량 운영 데이터(단위당 1,000건+)의 적재·정합성 검증 백엔드를 설계부터 운영까지 단독 담당",
      },
      {
        lead: "운영 자동화 (1일 → 1시간)",
        detail: "수동 대조하던 정합성 검증을 자동화하고, 스케줄러 배치로 이상 감지·재처리까지 무인화",
      },
      {
        lead: "데이터 재설계 → 제품화",
        detail: "핵심 설정 테이블을 3NF로 재설계하고, 그 데이터 기반의 운영팀용 저작 도구를 풀스택 단독 구축",
      },
      {
        lead: "레거시 마이그레이션 (84K LOC)",
        detail: "Express 서버(~100 API)를 NestJS DI 구조로 단독 이관 — 공통 처리 일원화·TDD 도입",
      },
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
    title:
      "핵심 설정 데이터 3NF 정규화 → 리포트 템플릿 저작 도구 구축 (풀스택 단독 · 약 4,000 LOC)",
    subtitle:
      "핵심 설정 테이블을 3NF로 재설계하고, 그 데이터를 기반으로 운영팀이 보고 양식을 직접 만드는 저작 도구를 풀스택 단독 구축",
    descriptions: [
      {
        lead: "3NF 재설계",
        detail: "콤마 문자열 한 칸에 뭉쳐 있던 핵심 설정 테이블(5,500행·48만 필드)을 FK 기반 4개 테이블로, 정합성·인덱싱 가능 구조로 전환",
      },
      {
        lead: "조회 성능·무결성",
        detail: "문자열 스캔이던 필드 조회를 인덱스 조회로 개선하고, UNIQUE·FK 제약으로 중복(32건)·비표준 키를 DB 차원에서 차단",
      },
      {
        lead: "풀스택 단독 구축",
        detail: "정규화한 데이터를 기반으로, 구조를 정의하면 보고 양식이 자동 생성되는 저작 도구를 백엔드 엔진 + React 화면(약 4,000 LOC)까지 구현",
      },
      {
        lead: "운영팀 셀프서비스 전환",
        detail: "개발자만 코드·DB로 다루던 구조 정의를 운영팀이 UI로 직접 편집하도록 전환해 개발 의존을 제거",
      },
      {
        lead: "배포 전 diff 검증",
        detail: "생성 템플릿을 원본 정의와 대조해 불일치를 사전 차단",
      },
      {
        lead: "컴포넌트화·단일 배포",
        detail: "공통 컴포넌트 추출·동시 편집 잠금(edit-lock)으로 중복과 편집 충돌을 제거하고, SPA를 정적 서빙하는 단일 배포로 운영",
      },
    ],
    skills: [
      "MSSQL",
      "T-SQL",
      "Database Design",
      "Normalization (3NF)",
      "NestJS",
      "TypeScript",
      "React",
      "Schema/Template Design",
      "Component Design",
      "Azure Blob Storage",
    ],
  },
  {
    period: "2026.02 ~ 2026.04",
    title: "Express → NestJS 마이그레이션 및 후속 안정화",
    subtitle: "약 100개 엔드포인트·84,000 LOC 레거시 백엔드 마이그레이션 → 도메인 통일·타입 안전성·응답 성능 개선",
    descriptions: [
      {
        lead: "단독 마이그레이션 (84K LOC)",
        detail: "싱글톤 Express 서버(엔드포인트 ~100개)를 NestJS DI 모듈 구조로 이관",
      },
      {
        lead: "공통 처리 일원화",
        detail: "인터셉터·예외 필터로 응답/에러를 통합하고 DTO + class-validator로 입력 검증",
      },
      {
        lead: "테스트 구조 확보·TDD",
        detail: "DI로 서비스 계층을 분리해 단위 테스트 가능 구조를 만들고 결합도 완화",
      },
      {
        lead: "도메인 통일·타입 안전성",
        detail: "4종으로 분기되던 핵심 엔티티를 단일 모델로 통일(16개 모듈), any·ts-ignore 제거로 오류를 컴파일 단계에서 차단",
      },
      {
        lead: "성능·구조 개선",
        detail: "주요 조회 API의 직렬 IO를 병렬화하고, 1,903줄 단일 서비스를 역할별 3개로 분리하며 정합성 버그 다수 수정",
      },
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
    title: "대량 운영 데이터 적재·정합성 검증 자동화 Backoffice",
    subtitle: "운영 데이터 적재·정합성 검증 자동화 (백엔드 단독 담당)",
    descriptions: [
      {
        lead: "검증 파이프라인 단독 구현",
        detail: "대량 운영 리포트(JSON, 단위당 1,000건+)를 Blob → Cosmos로 적재·정형화하는 파이프라인의 검증·운영 백엔드",
      },
      {
        lead: "검증 자동화 (1일 → 1시간)",
        detail: "운영팀이 엑셀로 수동 비교하던 원천–가공 정합성 검증을 자동화",
      },
      {
        lead: "차이 자동 탐지·리포팅",
        detail: "원천(Blob)과 가공(Cosmos) 데이터 차이를 자동 탐지해 Excel 리포트로 출력, 운영 이슈 조기 발견",
      },
      {
        lead: "이상 감지 → 자동 조치 배치",
        detail: "정합성 검증을 스케줄러 기반 일일 배치로 자동화하고, 이상 데이터 감지 시 재처리 큐에 자동 등록해 운영자 개입 없이 정합성 유지",
      },
      {
        lead: "레이어드 아키텍처 설계",
        detail: "3종 데이터소스(MSSQL·Cosmos·Blob)를 Repository 패턴·DI로 추상화, 복사에 스테이징→검증→스왑·원자적 락을 적용해 원본 무손상·중복 실행 방지",
      },
      {
        lead: "테스트 준비 자동화",
        detail: "운영↔테스트 데이터 복사·자동 세팅 도구로 수작업 리포트 세팅을 대체",
      },
    ],
    skills: [
      "Node.js",
      "TypeScript",
      "Express",
      "TypeORM",
      "Azure Blob Storage",
      "Azure Cosmos DB",
      "Azure Queue",
      "Batch Scheduler",
      "MSSQL",
      "ExcelJS",
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
      {
        lead: "스와이프 API 성능 2배",
        detail: "Kafka 비동기 + CompletableFuture 병렬 처리로 응답 약 50%↓ (JMeter 1,000명 기준 3.8s → 1.2s)",
      },
      {
        lead: "위치 매칭 설계",
        detail: "Redis + Oracle(SDO_GEOM) 기반, 500m 이상 이동 시에만 DB 갱신해 불필요한 트랜잭션 최소화",
      },
      {
        lead: "실시간 매칭·채팅",
        detail: "상호 호감 시 매칭 처리 및 WebSocket 실시간 알림·채팅방 자동 생성",
      },
      {
        lead: "데이터 정합성 보장",
        detail: "Redis–Oracle 위치 데이터 정합성 문제 해결 (Oracle 갱신 성공 시에만 Redis 반영)",
      },
      {
        lead: "Flutter 클라이언트",
        detail: "매칭 스와이프 UI 구현 및 위치 권한 요청·백그라운드 갱신 흐름 처리",
      },
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
      {
        lead: "CI/CD 구축",
        detail: "AWS EC2 + GitHub Actions 기반 (JAR 빌드·전송·자동 실행 자동화)",
      },
      {
        lead: "인증 구현",
        detail: "Spring Security/JWT — JwtAuthenticationFilter/Provider, Refresh Token httpOnly 쿠키 자동 갱신",
      },
      {
        lead: "접근 로그 시스템",
        detail: "Spring AOP + Kafka → MongoDB 비동기 로그 수집 및 검색 최적화",
      },
      {
        lead: "침해 대응·서버 안정화",
        detail: "EC2 채굴 악성 컨테이너 탐지·제거 및 방화벽·보안그룹 강화",
      },
      {
        lead: "React 화면 구현",
        detail: "전자결재 작성·조회, 근태 신청·조회, 로그인 폼 및 JWT 기반 권한 라우팅",
      },
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