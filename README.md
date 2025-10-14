# 장사 친구

Expo + TypeScript + styled-components로 구축된 React Native 애플리케이션입니다.

## 기술 스택

- **React Native**: 크로스 플랫폼 모바일 앱 프레임워크
- **Expo**: React Native 개발 플랫폼
- **TypeScript**: 타입 안정성을 위한 정적 타입 언어
- **styled-components**: CSS-in-JS 스타일링 라이브러리

## 프로젝트 구조

```
jangsa/
├── App.tsx                 # 앱 진입점
├── src/
│   ├── components/         # 재사용 가능한 컴포넌트
│   ├── screens/            # 화면 컴포넌트
│   └── styles/             # 테마 및 스타일 설정
│       ├── theme.ts        # 앱 테마 정의
│       └── styled.d.ts     # styled-components 타입 정의
├── assets/                 # 이미지, 폰트 등의 정적 파일
└── package.json
```

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm start
```

### 플랫폼별 실행

```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

## 주요 기능

- ✅ TypeScript 지원
- ✅ styled-components를 통한 테마 시스템
- ✅ 재사용 가능한 컴포넌트
- ✅ 타입 안전성

## 테마 커스터마이징

`src/styles/theme.ts` 파일에서 앱의 색상, 간격, 글꼴 크기 등을 수정할 수 있습니다.

## 라이선스

Private
