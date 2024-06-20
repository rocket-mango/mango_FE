### 1. 프로젝트 제목

망고 초보 재배자를 위한 이미지 객체 검출 및 분류 기반 농작물 질병 식별 앱 서비스
"망하지망고"

### 2. 프로젝트 로고

![image](https://github.com/rocket-mango/mango_FE/assets/117718423/8506fe7a-ebbf-4e16-b283-fcc384ec7b19)

### 3. 프로젝트 소개

- 프로젝트 문제 정의
  - 망고 재배의 까다로움: 망고 재배 자체가 까다롭고, 재배 실패 시 피해가 특히 크다.
  - 질병 진단 대처의 어려움: 망고에 질병이 생기면, 상황에 맞는 대처 방법을 찾는 것이 오래 걸린다.
  - 망고 재배 정보의 산재: 망고를 재배하면서 참고해야 할 정보들이 너무 산재되어 있다.
  - 유저 맞춤 UX의 부족: 망고 재배자들의 다수가 나이가 있다보니, 복잡하고 어려운 화면은 피하게 된다.
- 주요 기능 및 제안 내용
  - 망고 잎의 촬영을 통해 1분 내외로 망고 질병 결과를 알리고 질병의 증상과 원인 및 대처 방법에 대한 정보를 제공한다.
  - 망고 재배에 필요한 정보를 한곳에 모아 종합적으로 제공한다.
  - 유저의 틀성을 충분히 고려하여 앱의 UX를 설계하였다.
- 기대효과 및 의의
  - 망고 재배 증가 추세: 국내 아열대 과일 재배 면적이 17년도에 비해 약 1.7배 증가하였다.
  - 높은 서비스 확장 유연성: 파파야, 용과, 올리브 등 타 아열대 작물로도 충분히 범위를 확장시킬 수 있다.
- 개발 기간
  - 2023.09 ~ 2024.06
- 기술 스택
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  ![image](https://github.com/rocket-mango/mango_FE/assets/117718423/a67f4e2e-21f2-4d0a-a4c7-5850e87eb590)

  - 프론트엔드에서는 안드로이드 환경에서 사용할 수 있게 제작되었으며, React Native, JavaScript, TypeScript를 사용하여 동적인 화면 UI를 구축하였다.

- ## 폴더 및 파일 구조
MangoApp
┣ 📦__tests__
 ┗ 📜App.test.tsx
┣ .📦.bundle
 ┗ 📜config
┣ 📦android
 ┣ 📂.gradle
 ┃ ┣ 📂8.3
 ┃ ┃ ┣ 📂checksums
 ┃ ┃ ┃ ┣ 📜checksums.lock
 ┃ ┃ ┃ ┣ 📜md5-checksums.bin
 ┃ ┃ ┃ ┗ 📜sha1-checksums.bin
 ┃ ┃ ┣ 📂dependencies-accessors
 ┃ ┃ ┃ ┣ 📂423f0288fa7dffe069445ffa4b72952b4629a15a
 ┃ ┃ ┃ ┃ ┣ 📂classes
 ┃ ┃ ┃ ┃ ┃ ┗ 📂org
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂gradle
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂accessors
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂dm
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LibrariesForLibs$AndroidGradleLibraryAccessors.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LibrariesForLibs$AndroidLibraryAccessors.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LibrariesForLibs$BundleAccessors.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LibrariesForLibs$KotlinGradleLibraryAccessors.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LibrariesForLibs$KotlinLibraryAccessors.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LibrariesForLibs$KotlinPluginAccessors.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LibrariesForLibs$PluginAccessors.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LibrariesForLibs$VersionAccessors.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LibrariesForLibs.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LibrariesForLibsInPluginsBlock$AndroidGradleLibraryAccessors.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LibrariesForLibsInPluginsBlock$AndroidLibraryAccessors.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LibrariesForLibsInPluginsBlock$BundleAccessors.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LibrariesForLibsInPluginsBlock$KotlinGradleLibraryAccessors.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LibrariesForLibsInPluginsBlock$KotlinLibraryAccessors.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LibrariesForLibsInPluginsBlock$KotlinPluginAccessors.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LibrariesForLibsInPluginsBlock$PluginAccessors.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LibrariesForLibsInPluginsBlock$VersionAccessors.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜LibrariesForLibsInPluginsBlock.class
 ┃ ┃ ┃ ┃ ┗ 📂sources
 ┃ ┃ ┃ ┃ ┃ ┗ 📂org
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂gradle
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂accessors
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂dm
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LibrariesForLibs.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜LibrariesForLibsInPluginsBlock.java
 ┃ ┃ ┃ ┣ 📜dependencies-accessors.lock
 ┃ ┃ ┃ ┗ 📜gc.properties
 ┃ ┃ ┣ 📂executionHistory
 ┃ ┃ ┃ ┣ 📜executionHistory.bin
 ┃ ┃ ┃ ┗ 📜executionHistory.lock
 ┃ ┃ ┣ 📂fileChanges
 ┃ ┃ ┃ ┗ 📜last-build.bin
 ┃ ┃ ┣ 📂fileHashes
 ┃ ┃ ┃ ┣ 📜fileHashes.bin
 ┃ ┃ ┃ ┣ 📜fileHashes.lock
 ┃ ┃ ┃ ┗ 📜resourceHashesCache.bin
 ┃ ┃ ┣ 📂vcsMetadata
 ┃ ┃ ┗ 📜gc.properties
 ┃ ┣ 📂buildOutputCleanup
 ┃ ┃ ┣ 📜buildOutputCleanup.lock
 ┃ ┃ ┣ 📜cache.properties
 ┃ ┃ ┗ 📜outputFiles.bin
 ┃ ┣ 📂vcs-1
 ┃ ┃ ┗ 📜gc.properties
 ┃ ┗ 📜file-system.probe
 ┣ 📂app
 ┃ ┣ 📂build
 ┃ ┃ ┣ 📂generated
 ┃ ┃ ┃ ┣ 📂ap_generated_sources
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┣ 📂assets
 ┃ ┃ ┃ ┃ ┗ 📂createBundleReleaseJsAndAssets
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.android.bundle
 ┃ ┃ ┃ ┣ 📂res
 ┃ ┃ ┃ ┃ ┣ 📂createBundleReleaseJsAndAssets
 ┃ ┃ ┃ ┃ ┃ ┣ 📂drawable-hdpi
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜node_modules_reactnavigation_elements_src_assets_backicon.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂drawable-mdpi
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_arrow_go.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_camera.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_delete.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_focusedhome.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_focusedmango.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_focusedmy.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_focusedtest.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_galary.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_home.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_mango.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_my.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_protagonist_mango.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_search.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_state_mango.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_test.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜node_modules_reactnavigation_elements_src_assets_backicon.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜node_modules_reactnavigation_elements_src_assets_backiconmask.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂drawable-xhdpi
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜node_modules_reactnavigation_elements_src_assets_backicon.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂drawable-xxhdpi
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜node_modules_reactnavigation_elements_src_assets_backicon.png
 ┃ ┃ ┃ ┃ ┃ ┗ 📂drawable-xxxhdpi
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜node_modules_reactnavigation_elements_src_assets_backicon.png
 ┃ ┃ ┃ ┃ ┣ 📂pngs
 ┃ ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┗ 📂resValues
 ┃ ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂values
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜gradleResValues.xml
 ┃ ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂values
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜gradleResValues.xml
 ┃ ┃ ┃ ┣ 📂rncli
 ┃ ┃ ┃ ┃ ┗ 📂src
 ┃ ┃ ┃ ┃ ┃ ┗ 📂main
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂com
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂facebook
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂react
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜PackageList.java
 ┃ ┃ ┃ ┣ 📂source
 ┃ ┃ ┃ ┃ ┗ 📂buildConfig
 ┃ ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂com
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂mangoapp
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜BuildConfig.java
 ┃ ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂com
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂mangoapp
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜BuildConfig.java
 ┃ ┃ ┃ ┗ 📂sourcemaps
 ┃ ┃ ┃ ┃ ┗ 📂react
 ┃ ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.android.bundle.map
 ┃ ┃ ┣ 📂intermediates
 ┃ ┃ ┃ ┣ 📂aar_metadata_check
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┣ 📂annotation_processor_list
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📜annotationProcessors.json
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📜annotationProcessors.json
 ┃ ┃ ┃ ┣ 📂apk_ide_redirect_file
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📜redirect.txt
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📜redirect.txt
 ┃ ┃ ┃ ┣ 📂app_metadata
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📜app-metadata.properties
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📜app-metadata.properties
 ┃ ┃ ┃ ┣ 📂assets
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.android.bundle
 ┃ ┃ ┃ ┣ 📂binary_art_profile
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📜baseline.prof
 ┃ ┃ ┃ ┣ 📂binary_art_profile_metadata
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📜baseline.profm
 ┃ ┃ ┃ ┣ 📂compatible_screen_manifest
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📜output-metadata.json
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📜output-metadata.json
 ┃ ┃ ┃ ┣ 📂compile_and_runtime_not_namespaced_r_class_jar
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📜R.jar
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📜R.jar
 ┃ ┃ ┃ ┣ 📂compressed_assets
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂assets
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.android.bundle.jar
 ┃ ┃ ┃ ┣ 📂data_binding_layout_info_type_merge
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┣ 📂data_binding_layout_info_type_package
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┣ 📂default_proguard_files
 ┃ ┃ ┃ ┃ ┗ 📂global
 ┃ ┃ ┃ ┃ ┃ ┣ 📜proguard-android-optimize.txt-8.1.1
 ┃ ┃ ┃ ┃ ┃ ┣ 📜proguard-android.txt-8.1.1
 ┃ ┃ ┃ ┃ ┃ ┗ 📜proguard-defaults.txt-8.1.1
 ┃ ┃ ┃ ┣ 📂desugar_graph
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂currentProject
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dirs_bucket_0
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dirs_bucket_1
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dirs_bucket_2
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dirs_bucket_3
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_1ddc3f4f06ac5f1468354ab3ee4204db85b883bc0b4cca8728b356d93d9ed813_bucket_0
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_1ddc3f4f06ac5f1468354ab3ee4204db85b883bc0b4cca8728b356d93d9ed813_bucket_1
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_1ddc3f4f06ac5f1468354ab3ee4204db85b883bc0b4cca8728b356d93d9ed813_bucket_2
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂jar_1ddc3f4f06ac5f1468354ab3ee4204db85b883bc0b4cca8728b356d93d9ed813_bucket_3
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂externalLibs
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂mixedScopes
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂otherProjects
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_185881c11c581d1e6adc4a2bcdba2ef6f99e2e8cad12fc9dc9561c51a1309031_bucket_0
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_185881c11c581d1e6adc4a2bcdba2ef6f99e2e8cad12fc9dc9561c51a1309031_bucket_1
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_185881c11c581d1e6adc4a2bcdba2ef6f99e2e8cad12fc9dc9561c51a1309031_bucket_2
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_185881c11c581d1e6adc4a2bcdba2ef6f99e2e8cad12fc9dc9561c51a1309031_bucket_3
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_1a1ddc63c7189eb3cac9e5f92fe8f8910a39b57ce9d649f4a5e87dfa0c25eb7c_bucket_0
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_1a1ddc63c7189eb3cac9e5f92fe8f8910a39b57ce9d649f4a5e87dfa0c25eb7c_bucket_1
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_1a1ddc63c7189eb3cac9e5f92fe8f8910a39b57ce9d649f4a5e87dfa0c25eb7c_bucket_2
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_1a1ddc63c7189eb3cac9e5f92fe8f8910a39b57ce9d649f4a5e87dfa0c25eb7c_bucket_3
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_4447c099db5d6d9d665453084d56fce853329168678d87d532aeb83df6557f11_bucket_0
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_4447c099db5d6d9d665453084d56fce853329168678d87d532aeb83df6557f11_bucket_1
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_4447c099db5d6d9d665453084d56fce853329168678d87d532aeb83df6557f11_bucket_2
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_4447c099db5d6d9d665453084d56fce853329168678d87d532aeb83df6557f11_bucket_3
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_ba534452aea2fa52894d3994ce0cdc53b8b57e866b120d9dfdda90a5b937133d_bucket_0
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_ba534452aea2fa52894d3994ce0cdc53b8b57e866b120d9dfdda90a5b937133d_bucket_1
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_ba534452aea2fa52894d3994ce0cdc53b8b57e866b120d9dfdda90a5b937133d_bucket_2
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_ba534452aea2fa52894d3994ce0cdc53b8b57e866b120d9dfdda90a5b937133d_bucket_3
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_c972c5d0e3499d924e9cc55c2f946911bc6a831b848a37fdb23b10dfc0b310df_bucket_0
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_c972c5d0e3499d924e9cc55c2f946911bc6a831b848a37fdb23b10dfc0b310df_bucket_1
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_c972c5d0e3499d924e9cc55c2f946911bc6a831b848a37fdb23b10dfc0b310df_bucket_2
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_c972c5d0e3499d924e9cc55c2f946911bc6a831b848a37fdb23b10dfc0b310df_bucket_3
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_e3cd0379591c8f3188094d5e27e6fccfd31f6a81cc2766400fd21aae502973bf_bucket_0
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_e3cd0379591c8f3188094d5e27e6fccfd31f6a81cc2766400fd21aae502973bf_bucket_1
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_e3cd0379591c8f3188094d5e27e6fccfd31f6a81cc2766400fd21aae502973bf_bucket_2
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_e3cd0379591c8f3188094d5e27e6fccfd31f6a81cc2766400fd21aae502973bf_bucket_3
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_f6f522302825e83049834a17e80498b8d5d601e3566fea070c394bfdf8d6b754_bucket_0
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_f6f522302825e83049834a17e80498b8d5d601e3566fea070c394bfdf8d6b754_bucket_1
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_f6f522302825e83049834a17e80498b8d5d601e3566fea070c394bfdf8d6b754_bucket_2
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂jar_f6f522302825e83049834a17e80498b8d5d601e3566fea070c394bfdf8d6b754_bucket_3
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂currentProject
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dirs_bucket_0
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dirs_bucket_1
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dirs_bucket_2
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dirs_bucket_3
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_786020cfa7ac148840748b1bc3aa8114d6a76876bfdc3034052e1a6ebcac3114_bucket_0
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_786020cfa7ac148840748b1bc3aa8114d6a76876bfdc3034052e1a6ebcac3114_bucket_1
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_786020cfa7ac148840748b1bc3aa8114d6a76876bfdc3034052e1a6ebcac3114_bucket_2
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂jar_786020cfa7ac148840748b1bc3aa8114d6a76876bfdc3034052e1a6ebcac3114_bucket_3
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂externalLibs
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂mixedScopes
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂otherProjects
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_04a0655ff3f2d8b5060fb3463b053130c8de7ddcb329cc5cc2597128deabfe93_bucket_0
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_04a0655ff3f2d8b5060fb3463b053130c8de7ddcb329cc5cc2597128deabfe93_bucket_1
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_04a0655ff3f2d8b5060fb3463b053130c8de7ddcb329cc5cc2597128deabfe93_bucket_2
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_04a0655ff3f2d8b5060fb3463b053130c8de7ddcb329cc5cc2597128deabfe93_bucket_3
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_0f8ee8dd0607fa22593226be8b1310f9cc85540aeb492d9ff872d846f7812284_bucket_0
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_0f8ee8dd0607fa22593226be8b1310f9cc85540aeb492d9ff872d846f7812284_bucket_1
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_0f8ee8dd0607fa22593226be8b1310f9cc85540aeb492d9ff872d846f7812284_bucket_2
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_0f8ee8dd0607fa22593226be8b1310f9cc85540aeb492d9ff872d846f7812284_bucket_3
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_32dc4bde794e2e7e65875a80e20c1cc99b1a95c81499a3d58610dd24691f9ed9_bucket_0
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_32dc4bde794e2e7e65875a80e20c1cc99b1a95c81499a3d58610dd24691f9ed9_bucket_1
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_32dc4bde794e2e7e65875a80e20c1cc99b1a95c81499a3d58610dd24691f9ed9_bucket_2
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_32dc4bde794e2e7e65875a80e20c1cc99b1a95c81499a3d58610dd24691f9ed9_bucket_3
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_55f0f8634647cfc15ddaa1b8e0168e443c56d486d5d3213783210ef9d74b231e_bucket_0
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_55f0f8634647cfc15ddaa1b8e0168e443c56d486d5d3213783210ef9d74b231e_bucket_1
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_55f0f8634647cfc15ddaa1b8e0168e443c56d486d5d3213783210ef9d74b231e_bucket_2
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_55f0f8634647cfc15ddaa1b8e0168e443c56d486d5d3213783210ef9d74b231e_bucket_3
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_7699275b97541c0dc879cb2f1922474efaa8fe22dd4ca0f942ab3e2095c018a3_bucket_0
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_7699275b97541c0dc879cb2f1922474efaa8fe22dd4ca0f942ab3e2095c018a3_bucket_1
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_7699275b97541c0dc879cb2f1922474efaa8fe22dd4ca0f942ab3e2095c018a3_bucket_2
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_7699275b97541c0dc879cb2f1922474efaa8fe22dd4ca0f942ab3e2095c018a3_bucket_3
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_da53ea56b82cc4999ff055cd78d07639b8b7792600dc8f92860508fe5acb0113_bucket_0
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_da53ea56b82cc4999ff055cd78d07639b8b7792600dc8f92860508fe5acb0113_bucket_1
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_da53ea56b82cc4999ff055cd78d07639b8b7792600dc8f92860508fe5acb0113_bucket_2
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_da53ea56b82cc4999ff055cd78d07639b8b7792600dc8f92860508fe5acb0113_bucket_3
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_ec639750a6362267bb99f187d4c5668a4494226ca394fe4a3ba6f567cd83871c_bucket_0
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_ec639750a6362267bb99f187d4c5668a4494226ca394fe4a3ba6f567cd83871c_bucket_1
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jar_ec639750a6362267bb99f187d4c5668a4494226ca394fe4a3ba6f567cd83871c_bucket_2
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂jar_ec639750a6362267bb99f187d4c5668a4494226ca394fe4a3ba6f567cd83871c_bucket_3
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜graph.bin
 ┃ ┃ ┃ ┣ 📂dex
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┣ 📂mergeExtDexDebug
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜classes.dex
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜classes2.dex
 ┃ ┃ ┃ ┃ ┃ ┣ 📂mergeLibDexDebug
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂0
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜classes.dex
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂1
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂10
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂11
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂12
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂13
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂14
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂15
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂2
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂3
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂4
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂5
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂6
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂7
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂8
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂9
 ┃ ┃ ┃ ┃ ┃ ┗ 📂mergeProjectDexDebug
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂0
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜classes.dex
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂1
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂10
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜classes.dex
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂11
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂12
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂13
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂14
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜classes.dex
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂15
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂2
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂3
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂4
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂5
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂6
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂7
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂8
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂9
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📂mergeDexRelease
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜classes.dex
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜classes2.dex
 ┃ ┃ ┃ ┣ 📂dex_archive_input_jar_hashes
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📜out
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📜out
 ┃ ┃ ┃ ┣ 📂dex_number_of_buckets_file
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📜out
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📜out
 ┃ ┃ ┃ ┣ 📂duplicate_classes_check
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┣ 📂external_file_lib_dex_archives
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┣ 📂external_libs_dex
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📂mergeExtDexRelease
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜classes.dex
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜classes2.dex
 ┃ ┃ ┃ ┣ 📂external_libs_dex_archive
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┣ 📂external_libs_dex_archive_with_artifact_transforms
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┣ 📂global_synthetics_dex
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┣ 📂global_synthetics_external_lib
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┣ 📂global_synthetics_external_libs_artifact_transform
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┣ 📂global_synthetics_file_lib
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┣ 📂global_synthetics_mixed_scope
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┣ 📂global_synthetics_project
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┣ 📂global_synthetics_subproject
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┣ 📂incremental
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┣ 📂mergeDebugResources
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂merged.dir
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-af
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-af.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-am
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-am.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ar
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ar.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-as
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-as.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-az
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-az.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-b+es+419
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-b+es+419.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-b+sr+Latn
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-b+sr+Latn.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-be
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-be.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-bg
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-bg.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-bn
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-bn.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-bs
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-bs.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ca
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ca.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-cs
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-cs.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-da
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-da.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-de
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-de.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-el
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-el.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-en-rAU
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-en-rAU.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-en-rCA
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-en-rCA.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-en-rGB
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-en-rGB.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-en-rIN
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-en-rIN.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-en-rXC
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-en-rXC.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-es
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-es.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-es-rES
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-es-rES.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-es-rUS
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-es-rUS.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-et
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-et.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-eu
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-eu.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-fa
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-fa.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-fi
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-fi.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-fr
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-fr.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-fr-rCA
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-fr-rCA.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-gl
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-gl.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-gu
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-gu.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-h320dp-port-v13
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-h320dp-port-v13.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-h360dp-land-v13
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-h360dp-land-v13.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-h480dp-land-v13
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-h480dp-land-v13.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-h550dp-port-v13
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-h550dp-port-v13.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-h720dp-v13
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-h720dp-v13.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ha
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ha.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-hdpi-v4
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-hdpi-v4.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-hi
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-hi.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-hr
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-hr.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-hu
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-hu.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-hy
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-hy.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-in
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-in.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-is
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-is.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-it
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-it.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-iw
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-iw.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ja
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ja.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-jv
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-jv.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ka
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ka.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-kk
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-kk.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-km
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-km.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-kn
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-kn.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ko
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ko.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ku
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ku.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ky
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ky.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-land
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-land.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-large-v4
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-large-v4.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ldltr-v21
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ldltr-v21.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ldrtl-v17
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ldrtl-v17.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-lo
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-lo.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-lt
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-lt.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-lv
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-lv.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-mk
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-mk.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ml.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-mn
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-mn.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-mr
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-mr.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ms
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ms.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-my
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-my.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-nb
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-nb.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ne
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ne.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-night-v8
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-night-v8.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-nl
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-nl.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-or
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-or.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-pa
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-pa.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-pl
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-pl.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-port
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-port.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ps
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ps.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-pt
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-pt.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-pt-rBR
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-pt-rBR.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-pt-rPT
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-pt-rPT.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ro
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ro.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ru
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ru.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-si
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-si.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-sk
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-sk.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-sl
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-sl.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-small-v4
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-small-v4.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-so.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-sq
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-sq.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-sr
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-sr.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-sv
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-sv.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-sw
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-sw.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-sw600dp-v13
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-sw600dp-v13.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ta
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ta.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-te
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-te.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-tg
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-tg.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-th
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-th.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-tl
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-tl.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-tr
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-tr.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-uk
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-uk.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ur
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ur.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-uz
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-uz.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-v16
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-v16.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-v17
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-v17.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-v18
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-v18.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-v21
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-v21.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-v22
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-v22.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-v23
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-v23.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-v24
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-v24.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-v25
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-v25.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-v26
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-v26.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-v28
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-v28.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-v31
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-v31.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-vi
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-vi.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-w320dp-land-v13
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-w320dp-land-v13.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-w360dp-port-v13
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-w360dp-port-v13.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-w480dp-port-v13
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-w480dp-port-v13.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-w600dp-land-v13
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-w600dp-land-v13.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-watch-v20
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-watch-v20.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-watch-v21
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-watch-v21.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-xlarge-v4
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-xlarge-v4.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-zh-rCN
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-zh-rCN.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-zh-rHK
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-zh-rHK.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-zh-rTW
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-zh-rTW.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂values-zu
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-zu.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂stripped.dir
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜compile-file-map.properties
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜merger.xml
 ┃ ┃ ┃ ┃ ┃ ┗ 📂packageDebugResources
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂merged.dir
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂values
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂stripped.dir
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜compile-file-map.properties
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜merger.xml
 ┃ ┃ ┃ ┃ ┣ 📂debug-mergeJavaRes
 ┃ ┃ ┃ ┃ ┃ ┣ 📂zip-cache
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜+3tYM+tu1EnjW3J9Ne96IE0v5k4=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜+sFa6hIpN2FG_mVY+dbwork_hW4=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜0haPzQZcyK6E2w5LI8rlLc3cnyM=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜2sIksQy+uH+efHJbFHpvsptJSz8=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜3BHReQAmovUpe1+FRmpOt8_qS4I=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜3LDAAQed_LQjy0XoKzWyi7ER6kg=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜3qMEB1QkitjCFzXs2aSsrRFZMXc=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜3tiGEQUN11L2Qs0HPOJDwSoe5bU=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜3Y+aqDHTIdtCPO8faPTjULCvT3c=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜4nxC65hgvQRZwVYg3d1x9N0cMrk=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜52Q5vHNJuhf7fDg_fY9RuNigRPw=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜6gcRrFzDzpN7Qs7NtDbO4D025_0=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜6yKtLWWGHXUMapScRM6qnDRdqfM=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜7+mJDNimnlmh3pwtt2eJkrr9mZ8=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜7ChHDEZTS7HSTN35cGkKMSeblk8=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜8+Wn_GAvtfTlo0iCRl91wRrfO4U=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜82c_F9ykzbWT5L+QQ6XZvacCTpA=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜8bZz_noikPB7+KoRBJTEhOfug_c=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜8XSVeaSfCH1cpS5M0zLB_r_PvWU=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜9YfRFfQiuKcNEBStM9EyT7LuRfw=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜a688NZRc+JmCNjIjMNcvyTkgZQg=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AMeyHgMswtO7ss4gXkG7rQONGIk=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜cBkr6O0j2wfwt5ENNv4vnUkMNIA=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CSQLgg15sY9Ho2ZWyC8S6n305oc=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ddfRuDHzNkBBO8w3yzvsgYmrm2U=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜EdFgUI6QPVkZRrcsrZSlJkP7uCw=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜eed2+20K9knD0okjQoGfZJlv+Mc=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜F+YaLn3HfsDRj9U2uZDLxeN7i9g=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜f1RhftqeCFhRS1dXk487bxtN_2A=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FDMwLfutulLHgpLYBRoEm9kpQhs=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜fODdsIf65YGwEpQ07YzO99fRbYI=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜g35F1_KT1nLbJTJBe9dZdpPa3tI=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜G9EWWFvZMtjScE2cHLzGsyhTDbI=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜GApeV1ofaAQJXtZSSlvlsg6wCOE=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜gmv4mTZFUVS8IWvr3mXold6EYg8=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜hIWVvjahY+32AYbhMhImdHGtvOY=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜HmYpM0nsneXh2i7J20Rzr+eQ2zw=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜hoNY8+QGLhws82jPAPcCijwRBgI=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜hqbbhmczd0mDWJT83pnEZg2q3PQ=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜HTRGd1nD0xL3qrJsxZYZ3A0dmeA=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜HW9dN_WSURwSFMc_k2Mn+Hm+hPQ=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜I1fJrfSngIAncIs8hcTcm7vetPI=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜iE4OQHysvBBeDkE00yHk8Iw0wdo=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜iPmrqHYI1U2knVpW05CFLvn1Tnw=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜jn4DmC4GHeuAr0o7lHXzzZYpyyw=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜JNNMWBQh2qIGjHTG8LNTnW3xnZ8=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜K7xUhS+01WwrjYpvqbUprEmz89w=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜KH7pCFNLLtxcqEmcNx6SFrC3tns=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜k_+DF4NoLgHoYjZtz6j_UDwA8RI=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜La0tl4iISwK0CIbUARbaZ3tBCw0=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜lOV7BPYmutWHKedzis2tFJMyZNk=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LscJAn0QslVzd2OpV9PgIPZapaY=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LSpWH7coO_8LqXOWPbmZO2W7MUw=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜N3P3nvzJMKrNIkE3Yo6kVERTY7M=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜nocCi8gS+V+CGDtRU_Q2wdw4rIg=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜NQvAt6lNrHLyivZ9pq+sDKwEsUE=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜nr1yp+K6uquC+UQepCKVqSxg0YI=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜nT2YJuTACTQNB3cqibxPpSRMRXA=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜OLm8RVqP7ccKpQQTCE6t3sIjQvU=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜OUuSmiiO+FFEQ+JclizpTZHsPKA=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜P9XIeAdzEiyMuFbM9rKQz8Sg8lg=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜PE6qKSXaXihoFxmn2C9sBSz6sHg=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Pta3eA4h03eHpcCA2MW88L9luFo=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜PXnJQjiX+zLV+C8tUEPOXv+ryIg=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜q7INiVpbEfxZB3rBz4EiRSoEdAU=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜QBwNkmA8KYIIxfWCEW4GvLHogwk=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜QGRduq4DMAZbvWXHsuWkb1J_nYs=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜qKz6qpXMPACCUOh_r3bUlLkRzwg=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜QUf5DWj97W0cJwVxtzK_vd1YsoI=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜RCldcQcglux8GfeifN5Pf+R7QSQ=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜rmo5ISMYqBdAIh5ErilWax7wdCk=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜RQuI71wIV3edIzJmRK2o_BTIWbg=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜RUYDPpOUnIs3aMm76iuGeqAiekY=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ryyI5quxU2YoYuSOzwwjfIFnE+o=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SJliyTHgya_3DgSSgcr38di5VSc=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SK6VjSIwY02ecLHbh6yrA4bPE08=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Sosovf9bfYTKY8kwvZBvhITy3w8=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SQ+Fp1Ckl9JHY1+ifL6P1zuTiyw=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SqqcC3RuLrUnwEuSbcOnssME4ig=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜sVR_R4pC3Vs1kmfR5OCP9XhhXCM=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SYknpCGowkQs6iA4y9cY0Y1LdlA=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜tWurVwpuH6HvqMAI7eNViUaXxAg=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ug3pFRwDy5U0rpBRZ7wFMgmuUKI=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜UyfGfAott3GQwpXhfMQiWSR_30Y=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜u_N0Ns_kknxXAUWTEbCxfg3Uc6M=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜VilAUr7MUIwg6kxq+vjQYmgYbAw=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜VLgfyimy15cS8Gog1_j8iFpyy_4=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜VtABf8_GxGUmGYZ7xKrStEOJYmQ=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Vw3g4KUce6pEVlLZ_+refMthlqc=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Vy7qxyTeR7XG6o75YtmNLxyJVoE=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Wc5pvfGyt8_S1F2UEA4hAnLBB2U=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜WxXc7YyUIPIjaCITUwWjjW8XbWg=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜x5Xv462SAzh9DEqF1Mm5zQcy0J4=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜xQCqA8lchZ9HyO_jyZiXWiKXzUs=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Ya57dT41X0sD9dKtwvZeauokXFM=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜yCmQgU5T6p8PMBK7TUckB7AL5xM=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜yJaR6XrdrKi5efcls6ghwu20_O0=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜YOaSieeES+4qyP6Fi9q9pWvGLYw=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜YvEx3UYAo0ogy7hysA88tbJROgc=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜zb4qFAjOYdXV127m56_D4ZUxSZE=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜zMZLgwuBrMyL48KcabMoxBvMOpw=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ZuMfwcHwod7IZB6bZEkTXvtdt0g=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Zx_I4DhiiC6yJInCB7pYBUZwqnY=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ZYq4Ns_IExxEDS+5zUlTvVZA_vo=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Z_FnrknZZNDoseKOq5CpAjPldmg=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜_8u1rDYmR6UqLVkJRoEKBDJzyYg=
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜_rFoMsjeDoiEhekh+Z+HkDQC3Oo=
 ┃ ┃ ┃ ┃ ┃ ┗ 📜merge-state
 ┃ ┃ ┃ ┃ ┣ 📂lintVitalAnalyzeRelease
 ┃ ┃ ┃ ┃ ┃ ┣ 📜module.xml
 ┃ ┃ ┃ ┃ ┃ ┣ 📜release-mainArtifact-dependencies.xml
 ┃ ┃ ┃ ┃ ┃ ┣ 📜release-mainArtifact-libraries.xml
 ┃ ┃ ┃ ┃ ┃ ┗ 📜release.xml
 ┃ ┃ ┃ ┃ ┣ 📂lintVitalReportRelease
 ┃ ┃ ┃ ┃ ┃ ┣ 📜module.xml
 ┃ ┃ ┃ ┃ ┃ ┣ 📜release-mainArtifact-dependencies.xml
 ┃ ┃ ┃ ┃ ┃ ┣ 📜release-mainArtifact-libraries.xml
 ┃ ┃ ┃ ┃ ┃ ┗ 📜release.xml
 ┃ ┃ ┃ ┃ ┣ 📂mergeDebugAssets
 ┃ ┃ ┃ ┃ ┃ ┗ 📜merger.xml
 ┃ ┃ ┃ ┃ ┣ 📂mergeDebugJniLibFolders
 ┃ ┃ ┃ ┃ ┃ ┗ 📜merger.xml
 ┃ ┃ ┃ ┃ ┣ 📂mergeDebugShaders
 ┃ ┃ ┃ ┃ ┃ ┗ 📜merger.xml
 ┃ ┃ ┃ ┃ ┣ 📂mergeReleaseAssets
 ┃ ┃ ┃ ┃ ┃ ┗ 📜merger.xml
 ┃ ┃ ┃ ┃ ┣ 📂mergeReleaseJniLibFolders
 ┃ ┃ ┃ ┃ ┃ ┗ 📜merger.xml
 ┃ ┃ ┃ ┃ ┣ 📂mergeReleaseShaders
 ┃ ┃ ┃ ┃ ┃ ┗ 📜merger.xml
 ┃ ┃ ┃ ┃ ┣ 📂packageDebug
 ┃ ┃ ┃ ┃ ┃ ┗ 📂tmp
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂zip-cache
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜androidResources
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜javaResources0
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜dex-renamer-state.txt
 ┃ ┃ ┃ ┃ ┣ 📂packageRelease
 ┃ ┃ ┃ ┃ ┃ ┗ 📂tmp
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂zip-cache
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜androidResources
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜javaResources0
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜dex-renamer-state.txt
 ┃ ┃ ┃ ┃ ┣ 📂release
 ┃ ┃ ┃ ┃ ┃ ┣ 📂mergeReleaseResources
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂merged.dir
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-af
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-af.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-am
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-am.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ar
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ar.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-as
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-as.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-az
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-az.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-b+es+419
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-b+es+419.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-b+sr+Latn
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-b+sr+Latn.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-be
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-be.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-bg
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-bg.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-bn
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-bn.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-bs
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-bs.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ca
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ca.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-cs
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-cs.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-da
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-da.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-de
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-de.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-el
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-el.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-en-rAU
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-en-rAU.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-en-rCA
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-en-rCA.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-en-rGB
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-en-rGB.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-en-rIN
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-en-rIN.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-en-rXC
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-en-rXC.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-es
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-es.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-es-rES
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-es-rES.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-es-rUS
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-es-rUS.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-et
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-et.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-eu
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-eu.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-fa
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-fa.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-fi
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-fi.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-fr
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-fr.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-fr-rCA
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-fr-rCA.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-gl
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-gl.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-gu
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-gu.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-h320dp-port-v13
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-h320dp-port-v13.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-h360dp-land-v13
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-h360dp-land-v13.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-h480dp-land-v13
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-h480dp-land-v13.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-h550dp-port-v13
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-h550dp-port-v13.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-h720dp-v13
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-h720dp-v13.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ha
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ha.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-hdpi-v4
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-hdpi-v4.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-hi
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-hi.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-hr
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-hr.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-hu
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-hu.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-hy
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-hy.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-in
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-in.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-is
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-is.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-it
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-it.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-iw
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-iw.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ja
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ja.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-jv
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-jv.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ka
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ka.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-kk
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-kk.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-km
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-km.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-kn
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-kn.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ko
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ko.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ku
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ku.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ky
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ky.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-land
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-land.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-large-v4
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-large-v4.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ldltr-v21
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ldltr-v21.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ldrtl-v17
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ldrtl-v17.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-lo
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-lo.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-lt
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-lt.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-lv
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-lv.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-mk
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-mk.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ml.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-mn
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-mn.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-mr
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-mr.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ms
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ms.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-my
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-my.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-nb
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-nb.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ne
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ne.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-night-v8
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-night-v8.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-nl
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-nl.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-or
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-or.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-pa
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-pa.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-pl
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-pl.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-port
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-port.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ps
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ps.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-pt
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-pt.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-pt-rBR
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-pt-rBR.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-pt-rPT
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-pt-rPT.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ro
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ro.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ru
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ru.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-si
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-si.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-sk
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-sk.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-sl
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-sl.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-small-v4
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-small-v4.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-so.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-sq
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-sq.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-sr
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-sr.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-sv
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-sv.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-sw
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-sw.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-sw600dp-v13
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-sw600dp-v13.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ta
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ta.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-te
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-te.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-tg
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-tg.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-th
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-th.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-tl
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-tl.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-tr
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-tr.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-uk
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-uk.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-ur
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-ur.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-uz
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-uz.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-v16
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-v16.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-v17
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-v17.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-v18
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-v18.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-v21
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-v21.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-v22
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-v22.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-v23
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-v23.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-v24
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-v24.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-v25
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-v25.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-v26
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-v26.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-v28
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-v28.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-v31
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-v31.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-vi
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-vi.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-w320dp-land-v13
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-w320dp-land-v13.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-w360dp-port-v13
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-w360dp-port-v13.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-w480dp-port-v13
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-w480dp-port-v13.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-w600dp-land-v13
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-w600dp-land-v13.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-watch-v20
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-watch-v20.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-watch-v21
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-watch-v21.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-xlarge-v4
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-xlarge-v4.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-zh-rCN
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-zh-rCN.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-zh-rHK
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-zh-rHK.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂values-zh-rTW
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-zh-rTW.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂values-zu
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values-zu.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂stripped.dir
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜compile-file-map.properties
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜merger.xml
 ┃ ┃ ┃ ┃ ┃ ┗ 📂packageReleaseResources
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂merged.dir
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂values
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂stripped.dir
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜compile-file-map.properties
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜merger.xml
 ┃ ┃ ┃ ┃ ┗ 📂release-mergeJavaRes
 ┃ ┃ ┃ ┃ ┃ ┣ 📂zip-cache
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜+sFa6hIpN2FG_mVY+dbwork_hW4=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜0haPzQZcyK6E2w5LI8rlLc3cnyM=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜2sIksQy+uH+efHJbFHpvsptJSz8=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜3LDAAQed_LQjy0XoKzWyi7ER6kg=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜3qMEB1QkitjCFzXs2aSsrRFZMXc=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜3tiGEQUN11L2Qs0HPOJDwSoe5bU=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜3vG2T8oTo7geFwy0DrwaSA0Fwj8=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜4nxC65hgvQRZwVYg3d1x9N0cMrk=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜52Q5vHNJuhf7fDg_fY9RuNigRPw=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜6yKtLWWGHXUMapScRM6qnDRdqfM=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜7+mJDNimnlmh3pwtt2eJkrr9mZ8=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜7ChHDEZTS7HSTN35cGkKMSeblk8=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜8+Wn_GAvtfTlo0iCRl91wRrfO4U=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜82c_F9ykzbWT5L+QQ6XZvacCTpA=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜8bZz_noikPB7+KoRBJTEhOfug_c=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜8XSVeaSfCH1cpS5M0zLB_r_PvWU=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜9YfRFfQiuKcNEBStM9EyT7LuRfw=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜a688NZRc+JmCNjIjMNcvyTkgZQg=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜bqx0Kv_z13gKKzAmEzq5QgI66Sc=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜cBkr6O0j2wfwt5ENNv4vnUkMNIA=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜eed2+20K9knD0okjQoGfZJlv+Mc=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜F+YaLn3HfsDRj9U2uZDLxeN7i9g=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜f1RhftqeCFhRS1dXk487bxtN_2A=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FDMwLfutulLHgpLYBRoEm9kpQhs=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜g35F1_KT1nLbJTJBe9dZdpPa3tI=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜G9EWWFvZMtjScE2cHLzGsyhTDbI=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜GApeV1ofaAQJXtZSSlvlsg6wCOE=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜gmv4mTZFUVS8IWvr3mXold6EYg8=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜HmYpM0nsneXh2i7J20Rzr+eQ2zw=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜hoNY8+QGLhws82jPAPcCijwRBgI=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜hqbbhmczd0mDWJT83pnEZg2q3PQ=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜HTRGd1nD0xL3qrJsxZYZ3A0dmeA=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜I1fJrfSngIAncIs8hcTcm7vetPI=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜iE4OQHysvBBeDkE00yHk8Iw0wdo=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜iPmrqHYI1U2knVpW05CFLvn1Tnw=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜jn4DmC4GHeuAr0o7lHXzzZYpyyw=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜JNNMWBQh2qIGjHTG8LNTnW3xnZ8=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜K7xUhS+01WwrjYpvqbUprEmz89w=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜KH7pCFNLLtxcqEmcNx6SFrC3tns=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜k_+DF4NoLgHoYjZtz6j_UDwA8RI=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜lOV7BPYmutWHKedzis2tFJMyZNk=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LscJAn0QslVzd2OpV9PgIPZapaY=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LSpWH7coO_8LqXOWPbmZO2W7MUw=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜N3P3nvzJMKrNIkE3Yo6kVERTY7M=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜nocCi8gS+V+CGDtRU_Q2wdw4rIg=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜nT2YJuTACTQNB3cqibxPpSRMRXA=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜OUuSmiiO+FFEQ+JclizpTZHsPKA=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜P9XIeAdzEiyMuFbM9rKQz8Sg8lg=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜PE6qKSXaXihoFxmn2C9sBSz6sHg=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Pta3eA4h03eHpcCA2MW88L9luFo=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜PXnJQjiX+zLV+C8tUEPOXv+ryIg=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜q7INiVpbEfxZB3rBz4EiRSoEdAU=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜QGRduq4DMAZbvWXHsuWkb1J_nYs=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜qKz6qpXMPACCUOh_r3bUlLkRzwg=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜QUf5DWj97W0cJwVxtzK_vd1YsoI=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜RCldcQcglux8GfeifN5Pf+R7QSQ=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜rJhgVMF3GaDu+iUcVNl5G4c9F_8=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜rmo5ISMYqBdAIh5ErilWax7wdCk=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜RQuI71wIV3edIzJmRK2o_BTIWbg=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜RUYDPpOUnIs3aMm76iuGeqAiekY=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ryyI5quxU2YoYuSOzwwjfIFnE+o=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SJliyTHgya_3DgSSgcr38di5VSc=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SK6VjSIwY02ecLHbh6yrA4bPE08=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Sosovf9bfYTKY8kwvZBvhITy3w8=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SQ+Fp1Ckl9JHY1+ifL6P1zuTiyw=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SqqcC3RuLrUnwEuSbcOnssME4ig=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SYknpCGowkQs6iA4y9cY0Y1LdlA=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜tWurVwpuH6HvqMAI7eNViUaXxAg=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ug3pFRwDy5U0rpBRZ7wFMgmuUKI=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜UyfGfAott3GQwpXhfMQiWSR_30Y=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜u_N0Ns_kknxXAUWTEbCxfg3Uc6M=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜VilAUr7MUIwg6kxq+vjQYmgYbAw=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜VLgfyimy15cS8Gog1_j8iFpyy_4=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜VtABf8_GxGUmGYZ7xKrStEOJYmQ=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Vw3g4KUce6pEVlLZ_+refMthlqc=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Vy7qxyTeR7XG6o75YtmNLxyJVoE=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Wc5pvfGyt8_S1F2UEA4hAnLBB2U=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜WQdF9fjhANScvpFC8orf1qLaXDo=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜WxXc7YyUIPIjaCITUwWjjW8XbWg=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜x5Xv462SAzh9DEqF1Mm5zQcy0J4=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜xQCqA8lchZ9HyO_jyZiXWiKXzUs=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Ya57dT41X0sD9dKtwvZeauokXFM=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜yCmQgU5T6p8PMBK7TUckB7AL5xM=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜YOaSieeES+4qyP6Fi9q9pWvGLYw=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜zb4qFAjOYdXV127m56_D4ZUxSZE=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ZuMfwcHwod7IZB6bZEkTXvtdt0g=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Z_FnrknZZNDoseKOq5CpAjPldmg=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜_8u1rDYmR6UqLVkJRoEKBDJzyYg=
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜_kgib3Hwn7bxhUJHLNTdq0m3Bw0=
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜_rFoMsjeDoiEhekh+Z+HkDQC3Oo=
 ┃ ┃ ┃ ┃ ┃ ┗ 📜merge-state
 ┃ ┃ ┃ ┣ 📂javac
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📂classes
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂com
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂facebook
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂react
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜PackageList.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂mangoapp
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜BuildConfig.class
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📂classes
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂com
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂facebook
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂react
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜PackageList.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂mangoapp
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜BuildConfig.class
 ┃ ┃ ┃ ┣ 📂java_res
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂com
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂mangoapp
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂META-INF
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜app_debug.kotlin_module
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂com
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂mangoapp
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂META-INF
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜app_release.kotlin_module
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜kotlin-tooling-metadata.json
 ┃ ┃ ┃ ┣ 📂lint-cache
 ┃ ┃ ┃ ┃ ┗ 📜lint-cache-version.txt
 ┃ ┃ ┃ ┣ 📂lint_vital_intermediate_text_report
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📜lint-results-release.txt
 ┃ ┃ ┃ ┣ 📂lint_vital_partial_results
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┣ 📂lint_vital_return_value
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📜return-value-release.txt
 ┃ ┃ ┃ ┣ 📂local_only_symbol_list
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📜R-def.txt
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📜R-def.txt
 ┃ ┃ ┃ ┣ 📂manifest_merge_blame_file
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📜manifest-merger-blame-debug-report.txt
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📜manifest-merger-blame-release-report.txt
 ┃ ┃ ┃ ┣ 📂merged_art_profile
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📜baseline-prof.txt
 ┃ ┃ ┃ ┣ 📂merged_java_res
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📜base.jar
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📜base.jar
 ┃ ┃ ┃ ┣ 📂merged_jni_libs
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┣ 📂merged_manifest
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📜AndroidManifest.xml
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📜AndroidManifest.xml
 ┃ ┃ ┃ ┣ 📂merged_manifests
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┣ 📜AndroidManifest.xml
 ┃ ┃ ┃ ┃ ┃ ┗ 📜output-metadata.json
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┣ 📜AndroidManifest.xml
 ┃ ┃ ┃ ┃ ┃ ┗ 📜output-metadata.json
 ┃ ┃ ┃ ┣ 📂merged_native_libs
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂lib
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂arm64-v8a
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libc++_shared.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libcrypto.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libevent-2.1.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libevent_core-2.1.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libevent_extra-2.1.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfabricjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfb.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfbjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libflipper.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfolly_runtime.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog_init.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermesinstancejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes_executor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libimagepipeline.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjscinstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjserrorhandler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsi.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsijniprofiler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsinspector.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜liblogger.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libmapbufferjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-filters.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-imagetranscoder.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativeblob.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactperfloggerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_codegen_rncore.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_config.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_nativemodule_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_newarchdefaults.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_animations.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_attributedstring.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_componentregistry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_element.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_graphics.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_imagemanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_leakchecker.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mapbuffer.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mounting.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_runtimescheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_scheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_telemetry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_templateprocessor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_textlayoutmanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_uimanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_utils.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librninstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librnscreens.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_image.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_legacyviewmanagerinterop.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_native.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_root.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_scrollview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_text.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_textinput.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_unimplementedview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_view.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libruntimeexecutor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libssl.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libturbomodulejsijni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libuimanagerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜libyoga.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂armeabi-v7a
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libc++_shared.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libcrypto.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libevent-2.1.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libevent_core-2.1.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libevent_extra-2.1.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfabricjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfb.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfbjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libflipper.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfolly_runtime.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog_init.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermesinstancejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes_executor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libimagepipeline.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjscinstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjserrorhandler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsi.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsijniprofiler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsinspector.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜liblogger.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libmapbufferjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-filters.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-imagetranscoder.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativeblob.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactperfloggerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_codegen_rncore.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_config.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_nativemodule_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_newarchdefaults.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_animations.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_attributedstring.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_componentregistry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_element.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_graphics.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_imagemanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_leakchecker.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mapbuffer.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mounting.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_runtimescheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_scheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_telemetry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_templateprocessor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_textlayoutmanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_uimanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_utils.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librninstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librnscreens.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_image.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_legacyviewmanagerinterop.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_native.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_root.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_scrollview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_text.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_textinput.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_unimplementedview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_view.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libruntimeexecutor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libssl.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libturbomodulejsijni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libuimanagerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜libyoga.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂x86
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libc++_shared.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libcrypto.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libevent-2.1.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libevent_core-2.1.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libevent_extra-2.1.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfabricjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfb.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfbjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libflipper.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfolly_runtime.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog_init.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermesinstancejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes_executor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libimagepipeline.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjscinstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjserrorhandler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsi.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsijniprofiler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsinspector.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜liblogger.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libmapbufferjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-filters.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-imagetranscoder.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativeblob.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactperfloggerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_codegen_rncore.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_config.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_nativemodule_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_newarchdefaults.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_animations.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_attributedstring.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_componentregistry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_element.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_graphics.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_imagemanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_leakchecker.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mapbuffer.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mounting.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_runtimescheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_scheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_telemetry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_templateprocessor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_textlayoutmanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_uimanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_utils.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librninstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librnscreens.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_image.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_legacyviewmanagerinterop.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_native.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_root.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_scrollview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_text.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_textinput.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_unimplementedview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_view.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libruntimeexecutor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libssl.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libturbomodulejsijni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libuimanagerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜libyoga.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂x86_64
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libc++_shared.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libcrypto.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libevent-2.1.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libevent_core-2.1.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libevent_extra-2.1.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfabricjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfb.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfbjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libflipper.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfolly_runtime.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog_init.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermesinstancejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes_executor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libimagepipeline.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjscinstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjserrorhandler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsi.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsijniprofiler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsinspector.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜liblogger.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libmapbufferjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-filters.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-imagetranscoder.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativeblob.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactperfloggerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_codegen_rncore.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_config.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_nativemodule_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_newarchdefaults.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_animations.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_attributedstring.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_componentregistry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_element.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_graphics.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_imagemanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_leakchecker.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mapbuffer.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mounting.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_runtimescheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_scheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_telemetry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_templateprocessor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_textlayoutmanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_uimanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_utils.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librninstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librnscreens.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_image.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_legacyviewmanagerinterop.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_native.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_root.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_scrollview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_text.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_textinput.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_unimplementedview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_view.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libruntimeexecutor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libssl.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libturbomodulejsijni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libuimanagerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜libyoga.so
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂lib
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂arm64-v8a
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libc++_shared.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfabricjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfb.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfbjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfolly_runtime.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog_init.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermesinstancejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes_executor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libimagepipeline.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjscinstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjserrorhandler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsi.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsijniprofiler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsinspector.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜liblogger.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libmapbufferjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-filters.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-imagetranscoder.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativeblob.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactperfloggerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_codegen_rncore.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_config.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_nativemodule_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_newarchdefaults.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_animations.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_attributedstring.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_componentregistry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_graphics.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_imagemanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_leakchecker.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mapbuffer.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mounting.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_runtimescheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_scheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_telemetry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_templateprocessor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_textlayoutmanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_uimanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_utils.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librninstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librnscreens.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_image.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_legacyviewmanagerinterop.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_native.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_root.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_scrollview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_text.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_textinput.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_unimplementedview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_view.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libruntimeexecutor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libturbomodulejsijni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libuimanagerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜libyoga.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂armeabi-v7a
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libc++_shared.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfabricjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfb.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfbjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfolly_runtime.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog_init.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermesinstancejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes_executor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libimagepipeline.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjscinstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjserrorhandler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsi.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsijniprofiler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsinspector.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜liblogger.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libmapbufferjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-filters.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-imagetranscoder.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativeblob.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactperfloggerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_codegen_rncore.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_config.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_nativemodule_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_newarchdefaults.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_animations.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_attributedstring.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_componentregistry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_graphics.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_imagemanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_leakchecker.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mapbuffer.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mounting.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_runtimescheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_scheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_telemetry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_templateprocessor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_textlayoutmanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_uimanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_utils.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librninstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librnscreens.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_image.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_legacyviewmanagerinterop.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_native.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_root.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_scrollview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_text.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_textinput.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_unimplementedview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_view.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libruntimeexecutor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libturbomodulejsijni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libuimanagerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜libyoga.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂x86
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libc++_shared.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfabricjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfb.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfbjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfolly_runtime.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog_init.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermesinstancejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes_executor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libimagepipeline.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjscinstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjserrorhandler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsi.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsijniprofiler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsinspector.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜liblogger.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libmapbufferjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-filters.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-imagetranscoder.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativeblob.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactperfloggerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_codegen_rncore.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_config.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_nativemodule_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_newarchdefaults.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_animations.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_attributedstring.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_componentregistry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_graphics.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_imagemanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_leakchecker.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mapbuffer.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mounting.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_runtimescheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_scheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_telemetry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_templateprocessor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_textlayoutmanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_uimanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_utils.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librninstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librnscreens.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_image.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_legacyviewmanagerinterop.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_native.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_root.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_scrollview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_text.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_textinput.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_unimplementedview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_view.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libruntimeexecutor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libturbomodulejsijni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libuimanagerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜libyoga.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂x86_64
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libc++_shared.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfabricjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfb.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfbjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfolly_runtime.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog_init.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermesinstancejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes_executor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libimagepipeline.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjscinstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjserrorhandler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsi.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsijniprofiler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsinspector.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜liblogger.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libmapbufferjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-filters.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-imagetranscoder.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativeblob.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactperfloggerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_codegen_rncore.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_config.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_nativemodule_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_newarchdefaults.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_animations.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_attributedstring.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_componentregistry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_graphics.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_imagemanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_leakchecker.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mapbuffer.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mounting.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_runtimescheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_scheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_telemetry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_templateprocessor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_textlayoutmanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_uimanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_utils.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librninstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librnscreens.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_image.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_legacyviewmanagerinterop.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_native.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_root.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_scrollview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_text.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_textinput.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_unimplementedview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_view.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libruntimeexecutor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libturbomodulejsijni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libuimanagerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜libyoga.so
 ┃ ┃ ┃ ┣ 📂merged_res
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┣ 📜drawable_rn_edit_text_material.xml.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜mipmap-hdpi_ic_launcher.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜mipmap-hdpi_ic_launcher_round.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜mipmap-mdpi_ic_launcher.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜mipmap-mdpi_ic_launcher_round.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜mipmap-xhdpi_ic_launcher.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜mipmap-xhdpi_ic_launcher_round.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜mipmap-xxhdpi_ic_launcher.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜mipmap-xxhdpi_ic_launcher_round.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜mipmap-xxxhdpi_ic_launcher.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜mipmap-xxxhdpi_ic_launcher_round.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-af_values-af.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-am_values-am.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ar_values-ar.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-as_values-as.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-az_values-az.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-b+es+419_values-b+es+419.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-b+sr+Latn_values-b+sr+Latn.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-be_values-be.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-bg_values-bg.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-bn_values-bn.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-bs_values-bs.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ca_values-ca.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-cs_values-cs.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-da_values-da.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-de_values-de.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-el_values-el.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-en-rAU_values-en-rAU.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-en-rCA_values-en-rCA.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-en-rGB_values-en-rGB.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-en-rIN_values-en-rIN.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-en-rXC_values-en-rXC.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-es-rES_values-es-rES.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-es-rUS_values-es-rUS.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-es_values-es.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-et_values-et.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-eu_values-eu.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-fa_values-fa.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-fi_values-fi.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-fr-rCA_values-fr-rCA.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-fr_values-fr.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-gl_values-gl.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-gu_values-gu.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-h320dp-port-v13_values-h320dp-port-v13.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-h360dp-land-v13_values-h360dp-land-v13.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-h480dp-land-v13_values-h480dp-land-v13.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-h550dp-port-v13_values-h550dp-port-v13.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-h720dp-v13_values-h720dp-v13.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ha_values-ha.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-hdpi-v4_values-hdpi-v4.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-hi_values-hi.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-hr_values-hr.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-hu_values-hu.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-hy_values-hy.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-in_values-in.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-is_values-is.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-it_values-it.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-iw_values-iw.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ja_values-ja.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-jv_values-jv.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ka_values-ka.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-kk_values-kk.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-km_values-km.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-kn_values-kn.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ko_values-ko.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ku_values-ku.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ky_values-ky.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-land_values-land.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-large-v4_values-large-v4.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ldltr-v21_values-ldltr-v21.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ldrtl-v17_values-ldrtl-v17.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-lo_values-lo.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-lt_values-lt.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-lv_values-lv.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-mk_values-mk.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ml_values-ml.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-mn_values-mn.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-mr_values-mr.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ms_values-ms.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-my_values-my.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-nb_values-nb.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ne_values-ne.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-night-v8_values-night-v8.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-nl_values-nl.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-or_values-or.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-pa_values-pa.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-pl_values-pl.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-port_values-port.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ps_values-ps.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-pt-rBR_values-pt-rBR.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-pt-rPT_values-pt-rPT.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-pt_values-pt.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ro_values-ro.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ru_values-ru.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-si_values-si.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-sk_values-sk.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-sl_values-sl.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-small-v4_values-small-v4.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-so_values-so.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-sq_values-sq.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-sr_values-sr.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-sv_values-sv.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-sw600dp-v13_values-sw600dp-v13.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-sw_values-sw.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ta_values-ta.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-te_values-te.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-tg_values-tg.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-th_values-th.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-tl_values-tl.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-tr_values-tr.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-uk_values-uk.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ur_values-ur.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-uz_values-uz.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v16_values-v16.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v17_values-v17.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v18_values-v18.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v21_values-v21.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v22_values-v22.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v23_values-v23.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v24_values-v24.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v25_values-v25.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v26_values-v26.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v28_values-v28.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v31_values-v31.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-vi_values-vi.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-w320dp-land-v13_values-w320dp-land-v13.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-w360dp-port-v13_values-w360dp-port-v13.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-w480dp-port-v13_values-w480dp-port-v13.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-w600dp-land-v13_values-w600dp-land-v13.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-watch-v20_values-watch-v20.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-watch-v21_values-watch-v21.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-xlarge-v4_values-xlarge-v4.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-zh-rCN_values-zh-rCN.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-zh-rHK_values-zh-rHK.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-zh-rTW_values-zh-rTW.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-zu_values-zu.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┗ 📜values_values.arsc.flat
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┣ 📜drawable-hdpi_node_modules_reactnavigation_elements_src_assets_backicon.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜drawable-mdpi_assets_.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜drawable-mdpi_assets_arrow_go.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜drawable-mdpi_assets_camera.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜drawable-mdpi_assets_delete.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜drawable-mdpi_assets_focusedhome.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜drawable-mdpi_assets_focusedmango.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜drawable-mdpi_assets_focusedmy.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜drawable-mdpi_assets_focusedtest.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜drawable-mdpi_assets_galary.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜drawable-mdpi_assets_home.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜drawable-mdpi_assets_mango.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜drawable-mdpi_assets_my.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜drawable-mdpi_assets_protagonist_mango.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜drawable-mdpi_assets_search.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜drawable-mdpi_assets_state_mango.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜drawable-mdpi_assets_test.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜drawable-mdpi_node_modules_reactnavigation_elements_src_assets_backicon.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜drawable-mdpi_node_modules_reactnavigation_elements_src_assets_backiconmask.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜drawable-xhdpi_node_modules_reactnavigation_elements_src_assets_backicon.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜drawable-xxhdpi_node_modules_reactnavigation_elements_src_assets_backicon.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜drawable-xxxhdpi_node_modules_reactnavigation_elements_src_assets_backicon.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜drawable_rn_edit_text_material.xml.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜mipmap-hdpi_ic_launcher.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜mipmap-hdpi_ic_launcher_round.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜mipmap-mdpi_ic_launcher.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜mipmap-mdpi_ic_launcher_round.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜mipmap-xhdpi_ic_launcher.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜mipmap-xhdpi_ic_launcher_round.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜mipmap-xxhdpi_ic_launcher.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜mipmap-xxhdpi_ic_launcher_round.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜mipmap-xxxhdpi_ic_launcher.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜mipmap-xxxhdpi_ic_launcher_round.png.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-af_values-af.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-am_values-am.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ar_values-ar.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-as_values-as.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-az_values-az.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-b+es+419_values-b+es+419.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-b+sr+Latn_values-b+sr+Latn.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-be_values-be.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-bg_values-bg.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-bn_values-bn.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-bs_values-bs.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ca_values-ca.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-cs_values-cs.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-da_values-da.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-de_values-de.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-el_values-el.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-en-rAU_values-en-rAU.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-en-rCA_values-en-rCA.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-en-rGB_values-en-rGB.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-en-rIN_values-en-rIN.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-en-rXC_values-en-rXC.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-es-rES_values-es-rES.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-es-rUS_values-es-rUS.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-es_values-es.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-et_values-et.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-eu_values-eu.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-fa_values-fa.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-fi_values-fi.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-fr-rCA_values-fr-rCA.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-fr_values-fr.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-gl_values-gl.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-gu_values-gu.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-h320dp-port-v13_values-h320dp-port-v13.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-h360dp-land-v13_values-h360dp-land-v13.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-h480dp-land-v13_values-h480dp-land-v13.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-h550dp-port-v13_values-h550dp-port-v13.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-h720dp-v13_values-h720dp-v13.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ha_values-ha.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-hdpi-v4_values-hdpi-v4.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-hi_values-hi.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-hr_values-hr.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-hu_values-hu.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-hy_values-hy.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-in_values-in.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-is_values-is.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-it_values-it.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-iw_values-iw.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ja_values-ja.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-jv_values-jv.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ka_values-ka.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-kk_values-kk.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-km_values-km.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-kn_values-kn.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ko_values-ko.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ku_values-ku.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ky_values-ky.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-land_values-land.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-large-v4_values-large-v4.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ldltr-v21_values-ldltr-v21.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ldrtl-v17_values-ldrtl-v17.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-lo_values-lo.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-lt_values-lt.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-lv_values-lv.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-mk_values-mk.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ml_values-ml.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-mn_values-mn.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-mr_values-mr.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ms_values-ms.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-my_values-my.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-nb_values-nb.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ne_values-ne.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-night-v8_values-night-v8.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-nl_values-nl.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-or_values-or.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-pa_values-pa.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-pl_values-pl.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-port_values-port.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ps_values-ps.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-pt-rBR_values-pt-rBR.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-pt-rPT_values-pt-rPT.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-pt_values-pt.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ro_values-ro.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ru_values-ru.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-si_values-si.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-sk_values-sk.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-sl_values-sl.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-small-v4_values-small-v4.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-so_values-so.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-sq_values-sq.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-sr_values-sr.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-sv_values-sv.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-sw600dp-v13_values-sw600dp-v13.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-sw_values-sw.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ta_values-ta.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-te_values-te.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-tg_values-tg.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-th_values-th.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-tl_values-tl.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-tr_values-tr.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-uk_values-uk.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ur_values-ur.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-uz_values-uz.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v16_values-v16.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v17_values-v17.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v18_values-v18.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v21_values-v21.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v22_values-v22.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v23_values-v23.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v24_values-v24.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v25_values-v25.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v26_values-v26.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v28_values-v28.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v31_values-v31.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-vi_values-vi.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-w320dp-land-v13_values-w320dp-land-v13.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-w360dp-port-v13_values-w360dp-port-v13.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-w480dp-port-v13_values-w480dp-port-v13.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-w600dp-land-v13_values-w600dp-land-v13.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-watch-v20_values-watch-v20.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-watch-v21_values-watch-v21.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-xlarge-v4_values-xlarge-v4.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-zh-rCN_values-zh-rCN.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-zh-rHK_values-zh-rHK.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-zh-rTW_values-zh-rTW.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜values-zu_values-zu.arsc.flat
 ┃ ┃ ┃ ┃ ┃ ┗ 📜values_values.arsc.flat
 ┃ ┃ ┃ ┣ 📂merged_res_blame_folder
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂multi-v2
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜debug.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-af.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-am.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ar.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-as.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-az.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-b+es+419.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-b+sr+Latn.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-be.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-bg.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-bn.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-bs.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ca.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-cs.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-da.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-de.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-el.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-en-rAU.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-en-rCA.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-en-rGB.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-en-rIN.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-en-rXC.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-es-rES.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-es-rUS.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-es.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-et.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-eu.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-fa.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-fi.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-fr-rCA.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-fr.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-gl.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-gu.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-h320dp-port-v13.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-h360dp-land-v13.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-h480dp-land-v13.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-h550dp-port-v13.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-h720dp-v13.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ha.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-hdpi-v4.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-hi.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-hr.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-hu.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-hy.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-in.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-is.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-it.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-iw.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ja.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-jv.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ka.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-kk.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-km.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-kn.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ko.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ku.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ky.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-land.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-large-v4.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ldltr-v21.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ldrtl-v17.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-lo.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-lt.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-lv.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-mk.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ml.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-mn.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-mr.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ms.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-my.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-nb.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ne.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-night-v8.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-nl.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-or.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-pa.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-pl.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-port.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ps.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-pt-rBR.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-pt-rPT.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-pt.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ro.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ru.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-si.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-sk.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-sl.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-small-v4.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-so.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-sq.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-sr.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-sv.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-sw.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-sw600dp-v13.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ta.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-te.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-tg.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-th.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-tl.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-tr.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-uk.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ur.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-uz.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v16.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v17.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v18.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v21.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v22.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v23.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v24.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v25.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v26.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v28.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v31.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-vi.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-w320dp-land-v13.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-w360dp-port-v13.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-w480dp-port-v13.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-w600dp-land-v13.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-watch-v20.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-watch-v21.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-xlarge-v4.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-zh-rCN.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-zh-rHK.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-zh-rTW.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-zu.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂single
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜debug.json
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂multi-v2
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜release.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-af.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-am.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ar.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-as.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-az.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-b+es+419.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-b+sr+Latn.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-be.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-bg.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-bn.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-bs.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ca.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-cs.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-da.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-de.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-el.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-en-rAU.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-en-rCA.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-en-rGB.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-en-rIN.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-en-rXC.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-es-rES.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-es-rUS.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-es.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-et.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-eu.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-fa.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-fi.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-fr-rCA.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-fr.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-gl.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-gu.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-h320dp-port-v13.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-h360dp-land-v13.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-h480dp-land-v13.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-h550dp-port-v13.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-h720dp-v13.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ha.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-hdpi-v4.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-hi.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-hr.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-hu.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-hy.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-in.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-is.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-it.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-iw.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ja.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-jv.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ka.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-kk.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-km.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-kn.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ko.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ku.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ky.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-land.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-large-v4.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ldltr-v21.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ldrtl-v17.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-lo.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-lt.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-lv.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-mk.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ml.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-mn.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-mr.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ms.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-my.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-nb.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ne.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-night-v8.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-nl.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-or.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-pa.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-pl.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-port.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ps.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-pt-rBR.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-pt-rPT.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-pt.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ro.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ru.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-si.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-sk.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-sl.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-small-v4.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-so.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-sq.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-sr.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-sv.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-sw.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-sw600dp-v13.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ta.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-te.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-tg.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-th.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-tl.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-tr.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-uk.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-ur.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-uz.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v16.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v17.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v18.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v21.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v22.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v23.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v24.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v25.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v26.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v28.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-v31.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-vi.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-w320dp-land-v13.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-w360dp-port-v13.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-w480dp-port-v13.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-w600dp-land-v13.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-watch-v20.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-watch-v21.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-xlarge-v4.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-zh-rCN.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-zh-rHK.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-zh-rTW.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜values-zu.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂single
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜release.json
 ┃ ┃ ┃ ┣ 📂merged_shaders
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┣ 📂metadata_library_dependencies_report
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📜dependencies.pb
 ┃ ┃ ┃ ┣ 📂mixed_scope_dex_archive
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┣ 📂native_symbol_tables
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂arm64-v8a
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜librnscreens.so.sym
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂armeabi-v7a
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜librnscreens.so.sym
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂x86
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜librnscreens.so.sym
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂x86_64
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜librnscreens.so.sym
 ┃ ┃ ┃ ┣ 📂navigation_json
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📜navigation.json
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📜navigation.json
 ┃ ┃ ┃ ┣ 📂optimized_processed_res
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┣ 📜output-metadata.json
 ┃ ┃ ┃ ┃ ┃ ┗ 📜resources-release-optimize.ap_
 ┃ ┃ ┃ ┣ 📂packaged_manifests
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┣ 📜AndroidManifest.xml
 ┃ ┃ ┃ ┃ ┃ ┗ 📜output-metadata.json
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┣ 📜AndroidManifest.xml
 ┃ ┃ ┃ ┃ ┃ ┗ 📜output-metadata.json
 ┃ ┃ ┃ ┣ 📂packaged_res
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┣ 📂drawable
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜rn_edit_text_material.xml
 ┃ ┃ ┃ ┃ ┃ ┣ 📂mipmap-hdpi-v4
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ic_launcher.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ic_launcher_round.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂mipmap-mdpi-v4
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ic_launcher.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ic_launcher_round.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂mipmap-xhdpi-v4
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ic_launcher.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ic_launcher_round.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂mipmap-xxhdpi-v4
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ic_launcher.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ic_launcher_round.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂mipmap-xxxhdpi-v4
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ic_launcher.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ic_launcher_round.png
 ┃ ┃ ┃ ┃ ┃ ┗ 📂values
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values.xml
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┣ 📂drawable
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜rn_edit_text_material.xml
 ┃ ┃ ┃ ┃ ┃ ┣ 📂drawable-hdpi-v4
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜node_modules_reactnavigation_elements_src_assets_backicon.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂drawable-mdpi-v4
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_arrow_go.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_camera.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_delete.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_focusedhome.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_focusedmango.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_focusedmy.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_focusedtest.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_galary.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_home.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_mango.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_my.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_protagonist_mango.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_search.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_state_mango.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜assets_test.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜node_modules_reactnavigation_elements_src_assets_backicon.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜node_modules_reactnavigation_elements_src_assets_backiconmask.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂drawable-xhdpi-v4
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜node_modules_reactnavigation_elements_src_assets_backicon.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂drawable-xxhdpi-v4
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜node_modules_reactnavigation_elements_src_assets_backicon.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂drawable-xxxhdpi-v4
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜node_modules_reactnavigation_elements_src_assets_backicon.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂mipmap-hdpi-v4
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ic_launcher.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ic_launcher_round.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂mipmap-mdpi-v4
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ic_launcher.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ic_launcher_round.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂mipmap-xhdpi-v4
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ic_launcher.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ic_launcher_round.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂mipmap-xxhdpi-v4
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ic_launcher.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ic_launcher_round.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂mipmap-xxxhdpi-v4
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ic_launcher.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ic_launcher_round.png
 ┃ ┃ ┃ ┃ ┃ ┗ 📂values
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜values.xml
 ┃ ┃ ┃ ┣ 📂processed_res
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜output-metadata.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜resources-debug.ap_
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜output-metadata.json
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜resources-release.ap_
 ┃ ┃ ┃ ┣ 📂project_dex_archive
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂com
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂facebook
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂react
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜PackageList.dex
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂mangoapp
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BuildConfig.dex
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MainActivity.dex
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MainApplication$reactNativeHost$1.dex
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MainApplication.dex
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜92bd3635a1b7a5095a49c24dbb601c434eb58eec6fb3613e79a330e3bb105c0e_0.jar
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜92bd3635a1b7a5095a49c24dbb601c434eb58eec6fb3613e79a330e3bb105c0e_1.jar
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜92bd3635a1b7a5095a49c24dbb601c434eb58eec6fb3613e79a330e3bb105c0e_2.jar
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜92bd3635a1b7a5095a49c24dbb601c434eb58eec6fb3613e79a330e3bb105c0e_3.jar
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂com
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂facebook
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂react
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜PackageList.dex
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂mangoapp
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BuildConfig.dex
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MainActivity.dex
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MainApplication$reactNativeHost$1.dex
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MainApplication.dex
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜5467bc2b7a131041350326883eb8ecec2cfed37511eef18c8df353e39a95b2fe_0.jar
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜5467bc2b7a131041350326883eb8ecec2cfed37511eef18c8df353e39a95b2fe_1.jar
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜5467bc2b7a131041350326883eb8ecec2cfed37511eef18c8df353e39a95b2fe_2.jar
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜5467bc2b7a131041350326883eb8ecec2cfed37511eef18c8df353e39a95b2fe_3.jar
 ┃ ┃ ┃ ┣ 📂runtime_symbol_list
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📜R.txt
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📜R.txt
 ┃ ┃ ┃ ┣ 📂sdk_dependency_data
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📜sdkDependencyData.pb
 ┃ ┃ ┃ ┣ 📂signing_config_versions
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📜signing-config-versions.json
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📜signing-config-versions.json
 ┃ ┃ ┃ ┣ 📂sourcemaps
 ┃ ┃ ┃ ┃ ┗ 📂react
 ┃ ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜index.android.bundle.compiler.map
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.android.bundle.packager.map
 ┃ ┃ ┃ ┣ 📂source_set_path_map
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📜file-map.txt
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📜file-map.txt
 ┃ ┃ ┃ ┣ 📂stripped_native_libs
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂lib
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂arm64-v8a
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libc++_shared.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libcrypto.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libevent-2.1.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libevent_core-2.1.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libevent_extra-2.1.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfabricjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfb.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfbjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libflipper.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfolly_runtime.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog_init.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermesinstancejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes_executor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libimagepipeline.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjscinstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjserrorhandler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsi.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsijniprofiler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsinspector.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜liblogger.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libmapbufferjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-filters.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-imagetranscoder.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativeblob.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactperfloggerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_codegen_rncore.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_config.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_nativemodule_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_newarchdefaults.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_animations.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_attributedstring.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_componentregistry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_element.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_graphics.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_imagemanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_leakchecker.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mapbuffer.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mounting.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_runtimescheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_scheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_telemetry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_templateprocessor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_textlayoutmanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_uimanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_utils.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librninstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librnscreens.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_image.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_legacyviewmanagerinterop.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_native.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_root.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_scrollview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_text.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_textinput.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_unimplementedview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_view.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libruntimeexecutor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libssl.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libturbomodulejsijni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libuimanagerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜libyoga.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂armeabi-v7a
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libc++_shared.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libcrypto.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libevent-2.1.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libevent_core-2.1.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libevent_extra-2.1.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfabricjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfb.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfbjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libflipper.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfolly_runtime.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog_init.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermesinstancejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes_executor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libimagepipeline.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjscinstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjserrorhandler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsi.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsijniprofiler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsinspector.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜liblogger.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libmapbufferjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-filters.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-imagetranscoder.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativeblob.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactperfloggerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_codegen_rncore.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_config.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_nativemodule_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_newarchdefaults.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_animations.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_attributedstring.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_componentregistry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_element.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_graphics.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_imagemanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_leakchecker.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mapbuffer.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mounting.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_runtimescheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_scheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_telemetry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_templateprocessor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_textlayoutmanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_uimanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_utils.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librninstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librnscreens.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_image.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_legacyviewmanagerinterop.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_native.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_root.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_scrollview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_text.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_textinput.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_unimplementedview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_view.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libruntimeexecutor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libssl.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libturbomodulejsijni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libuimanagerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜libyoga.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂x86
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libc++_shared.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libcrypto.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libevent-2.1.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libevent_core-2.1.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libevent_extra-2.1.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfabricjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfb.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfbjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libflipper.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfolly_runtime.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog_init.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermesinstancejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes_executor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libimagepipeline.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjscinstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjserrorhandler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsi.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsijniprofiler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsinspector.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜liblogger.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libmapbufferjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-filters.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-imagetranscoder.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativeblob.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactperfloggerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_codegen_rncore.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_config.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_nativemodule_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_newarchdefaults.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_animations.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_attributedstring.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_componentregistry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_element.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_graphics.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_imagemanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_leakchecker.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mapbuffer.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mounting.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_runtimescheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_scheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_telemetry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_templateprocessor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_textlayoutmanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_uimanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_utils.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librninstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librnscreens.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_image.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_legacyviewmanagerinterop.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_native.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_root.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_scrollview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_text.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_textinput.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_unimplementedview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_view.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libruntimeexecutor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libssl.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libturbomodulejsijni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libuimanagerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜libyoga.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂x86_64
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libc++_shared.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libcrypto.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libevent-2.1.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libevent_core-2.1.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libevent_extra-2.1.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfabricjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfb.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfbjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libflipper.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfolly_runtime.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog_init.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermesinstancejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes_executor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libimagepipeline.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjscinstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjserrorhandler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsi.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsijniprofiler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsinspector.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜liblogger.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libmapbufferjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-filters.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-imagetranscoder.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativeblob.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactperfloggerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_codegen_rncore.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_config.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_nativemodule_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_newarchdefaults.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_animations.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_attributedstring.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_componentregistry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_element.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_graphics.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_imagemanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_leakchecker.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mapbuffer.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mounting.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_runtimescheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_scheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_telemetry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_templateprocessor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_textlayoutmanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_uimanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_utils.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librninstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librnscreens.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_image.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_legacyviewmanagerinterop.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_native.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_root.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_scrollview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_text.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_textinput.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_unimplementedview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_view.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libruntimeexecutor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libssl.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libturbomodulejsijni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libuimanagerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜libyoga.so
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂lib
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂arm64-v8a
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libc++_shared.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfabricjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfb.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfbjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfolly_runtime.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog_init.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermesinstancejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes_executor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libimagepipeline.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjscinstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjserrorhandler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsi.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsijniprofiler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsinspector.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜liblogger.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libmapbufferjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-filters.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-imagetranscoder.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativeblob.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactperfloggerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_codegen_rncore.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_config.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_nativemodule_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_newarchdefaults.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_animations.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_attributedstring.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_componentregistry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_graphics.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_imagemanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_leakchecker.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mapbuffer.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mounting.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_runtimescheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_scheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_telemetry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_templateprocessor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_textlayoutmanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_uimanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_utils.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librninstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librnscreens.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_image.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_legacyviewmanagerinterop.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_native.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_root.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_scrollview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_text.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_textinput.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_unimplementedview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_view.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libruntimeexecutor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libturbomodulejsijni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libuimanagerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜libyoga.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂armeabi-v7a
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libc++_shared.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfabricjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfb.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfbjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfolly_runtime.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog_init.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermesinstancejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes_executor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libimagepipeline.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjscinstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjserrorhandler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsi.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsijniprofiler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsinspector.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜liblogger.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libmapbufferjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-filters.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-imagetranscoder.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativeblob.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactperfloggerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_codegen_rncore.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_config.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_nativemodule_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_newarchdefaults.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_animations.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_attributedstring.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_componentregistry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_graphics.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_imagemanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_leakchecker.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mapbuffer.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mounting.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_runtimescheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_scheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_telemetry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_templateprocessor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_textlayoutmanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_uimanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_utils.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librninstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librnscreens.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_image.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_legacyviewmanagerinterop.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_native.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_root.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_scrollview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_text.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_textinput.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_unimplementedview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_view.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libruntimeexecutor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libturbomodulejsijni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libuimanagerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜libyoga.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂x86
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libc++_shared.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfabricjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfb.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfbjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfolly_runtime.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog_init.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermesinstancejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes_executor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libimagepipeline.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjscinstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjserrorhandler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsi.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsijniprofiler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsinspector.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜liblogger.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libmapbufferjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-filters.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-imagetranscoder.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativeblob.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactperfloggerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_codegen_rncore.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_config.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_nativemodule_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_newarchdefaults.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_animations.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_attributedstring.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_componentregistry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_graphics.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_imagemanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_leakchecker.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mapbuffer.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mounting.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_runtimescheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_scheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_telemetry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_templateprocessor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_textlayoutmanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_uimanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_utils.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librninstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librnscreens.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_image.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_legacyviewmanagerinterop.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_native.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_root.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_scrollview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_text.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_textinput.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_unimplementedview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_view.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libruntimeexecutor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libturbomodulejsijni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libuimanagerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜libyoga.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂x86_64
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libc++_shared.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfabricjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfb.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfbjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libfolly_runtime.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libglog_init.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermesinstancejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libhermes_executor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libimagepipeline.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjscinstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjserrorhandler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsi.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsijniprofiler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libjsinspector.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜liblogger.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libmapbufferjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-filters.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libnative-imagetranscoder.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativeblob.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactnativejni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreactperfloggerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_codegen_rncore.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_config.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_nativemodule_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_newarchdefaults.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_animations.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_attributedstring.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_componentregistry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_core.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_debug.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_graphics.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_imagemanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_leakchecker.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mapbuffer.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_mounting.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_runtimescheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_scheduler.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_telemetry.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_templateprocessor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_textlayoutmanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_render_uimanager.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libreact_utils.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librninstance.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librnscreens.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_image.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_legacyviewmanagerinterop.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_native.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_root.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_scrollview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_text.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_textinput.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_unimplementedview.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜librrc_view.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libruntimeexecutor.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libturbomodulejsijni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜libuimanagerjni.so
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜libyoga.so
 ┃ ┃ ┃ ┣ 📂sub_project_dex_archive
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜0a36f2e4e77dd645af07473770f4a38470aa0e25b25edd8a1b303742dad71c54_3.jar
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜532a9cd6710fa880209ed67c132cdb19a376245f41260c03232092d093489cf6_1.jar
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜92f15c13a04dab55c72c3557ad95612d56bb6166ba4c09a8f6c9ab7867621b24_1.jar
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜9f8e3de11f6b79da4bfe1ce8d0f510c4db000d7aff8bc2e56a18908742e9e4b7_2.jar
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜b28efbc0429c222ad8b4bb53902d157b4026d51dcbe49dd2110dacf644072203_3.jar
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ee9c537124670c6709ff002f619c10b2912a0b3100537bf7c25f453a83fae6cb_1.jar
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ee9c537124670c6709ff002f619c10b2912a0b3100537bf7c25f453a83fae6cb_2.jar
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ee9c537124670c6709ff002f619c10b2912a0b3100537bf7c25f453a83fae6cb_3.jar
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜f00291fc9212db6b2f83543fa8d70a0b815870fede2229b095214463d886127d_1.jar
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜f00291fc9212db6b2f83543fa8d70a0b815870fede2229b095214463d886127d_2.jar
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜f00291fc9212db6b2f83543fa8d70a0b815870fede2229b095214463d886127d_3.jar
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📂out
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜1ff13928327d8d87dd60db6b3a35f4c204801b9b163492902ee180766636e526_1.jar
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜1ff13928327d8d87dd60db6b3a35f4c204801b9b163492902ee180766636e526_2.jar
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜1ff13928327d8d87dd60db6b3a35f4c204801b9b163492902ee180766636e526_3.jar
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜27da7d2b26bc7e8cdaf167dbaeb6721fe640b0c4c2c36ebc63b464bfa84c869e_1.jar
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜27da7d2b26bc7e8cdaf167dbaeb6721fe640b0c4c2c36ebc63b464bfa84c869e_2.jar
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜27da7d2b26bc7e8cdaf167dbaeb6721fe640b0c4c2c36ebc63b464bfa84c869e_3.jar
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜4420805dcb6aeca12e64c94674b2ba46cd22d1d5a2e07692803336c98f11bcc8_3.jar
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜a55997dd746fa3795029a0dc9371c3608240cb08b4132e7dd8bb361f05063861_1.jar
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ac1dd9751ffa854cb2538133db23177a22d92498311300c8b65b14248c6f2740_3.jar
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜c8c28ee58753082318cc458a2c766972e502141f0f244a98e877dfd5f9b6dbf1_1.jar
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜f54dab1d399f7fdb6c0518e127ead5bdc50dfe3b29dbf64857bbcd8f1fcfa997_2.jar
 ┃ ┃ ┃ ┣ 📂symbol_list_with_package_name
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┗ 📜package-aware-r.txt
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📜package-aware-r.txt
 ┃ ┃ ┃ ┗ 📂validate_signing_config
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┣ 📂kotlin
 ┃ ┃ ┃ ┣ 📂compileDebugKotlin
 ┃ ┃ ┃ ┃ ┣ 📂cacheable
 ┃ ┃ ┃ ┃ ┃ ┣ 📂caches-jvm
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂inputs
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜source-to-output.tab
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜source-to-output.tab.keystream
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜source-to-output.tab.keystream.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜source-to-output.tab.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜source-to-output.tab.values.at
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜source-to-output.tab_i
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜source-to-output.tab_i.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jvm
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂kotlin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜class-attributes.tab
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜class-attributes.tab.keystream
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜class-attributes.tab.keystream.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜class-attributes.tab.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜class-attributes.tab.values.at
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜class-attributes.tab_i
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜class-attributes.tab_i.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜class-fq-name-to-source.tab
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜class-fq-name-to-source.tab.keystream
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜class-fq-name-to-source.tab.keystream.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜class-fq-name-to-source.tab.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜class-fq-name-to-source.tab.values.at
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜class-fq-name-to-source.tab_i
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜class-fq-name-to-source.tab_i.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜internal-name-to-source.tab
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜internal-name-to-source.tab.keystream
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜internal-name-to-source.tab.keystream.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜internal-name-to-source.tab.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜internal-name-to-source.tab.values.at
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜internal-name-to-source.tab_i
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜internal-name-to-source.tab_i.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜java-sources-proto-map.tab
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜java-sources-proto-map.tab.keystream
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜java-sources-proto-map.tab.keystream.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜java-sources-proto-map.tab.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜java-sources-proto-map.tab.values.at
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜java-sources-proto-map.tab_i
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜java-sources-proto-map.tab_i.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜proto.tab
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜proto.tab.keystream
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜proto.tab.keystream.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜proto.tab.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜proto.tab.values.at
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜proto.tab_i
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜proto.tab_i.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜source-to-classes.tab
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜source-to-classes.tab.keystream
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜source-to-classes.tab.keystream.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜source-to-classes.tab.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜source-to-classes.tab.values.at
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜source-to-classes.tab_i
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜source-to-classes.tab_i.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜subtypes.tab
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜subtypes.tab.keystream
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜subtypes.tab.keystream.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜subtypes.tab.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜subtypes.tab.values.at
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜subtypes.tab_i
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜subtypes.tab_i.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜supertypes.tab
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜supertypes.tab.keystream
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜supertypes.tab.keystream.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜supertypes.tab.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜supertypes.tab.values.at
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜supertypes.tab_i
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜supertypes.tab_i.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂lookups
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜counters.tab
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜file-to-id.tab
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜file-to-id.tab.keystream
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜file-to-id.tab.keystream.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜file-to-id.tab.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜file-to-id.tab.values.at
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜file-to-id.tab_i
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜file-to-id.tab_i.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜id-to-file.tab
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜id-to-file.tab.keystream
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜id-to-file.tab.keystream.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜id-to-file.tab.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜id-to-file.tab.values.at
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜id-to-file.tab_i
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜id-to-file.tab_i.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜lookups.tab
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜lookups.tab.keystream
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜lookups.tab.keystream.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜lookups.tab.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜lookups.tab.values.at
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜lookups.tab_i
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜lookups.tab_i.len
 ┃ ┃ ┃ ┃ ┃ ┗ 📜last-build.bin
 ┃ ┃ ┃ ┃ ┗ 📂local-state
 ┃ ┃ ┃ ┃ ┃ ┗ 📜build-history.bin
 ┃ ┃ ┃ ┗ 📂compileReleaseKotlin
 ┃ ┃ ┃ ┃ ┣ 📂cacheable
 ┃ ┃ ┃ ┃ ┃ ┣ 📂caches-jvm
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂inputs
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜source-to-output.tab
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜source-to-output.tab.keystream
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜source-to-output.tab.keystream.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜source-to-output.tab.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜source-to-output.tab.values.at
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜source-to-output.tab_i
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜source-to-output.tab_i.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂jvm
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂kotlin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜class-attributes.tab
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜class-attributes.tab.keystream
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜class-attributes.tab.keystream.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜class-attributes.tab.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜class-attributes.tab.values.at
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜class-attributes.tab_i
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜class-attributes.tab_i.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜class-fq-name-to-source.tab
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜class-fq-name-to-source.tab.keystream
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜class-fq-name-to-source.tab.keystream.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜class-fq-name-to-source.tab.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜class-fq-name-to-source.tab.values.at
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜class-fq-name-to-source.tab_i
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜class-fq-name-to-source.tab_i.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜internal-name-to-source.tab
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜internal-name-to-source.tab.keystream
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜internal-name-to-source.tab.keystream.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜internal-name-to-source.tab.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜internal-name-to-source.tab.values.at
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜internal-name-to-source.tab_i
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜internal-name-to-source.tab_i.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜java-sources-proto-map.tab
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜java-sources-proto-map.tab.keystream
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜java-sources-proto-map.tab.keystream.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜java-sources-proto-map.tab.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜java-sources-proto-map.tab.values.at
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜java-sources-proto-map.tab_i
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜java-sources-proto-map.tab_i.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜proto.tab
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜proto.tab.keystream
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜proto.tab.keystream.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜proto.tab.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜proto.tab.values.at
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜proto.tab_i
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜proto.tab_i.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜source-to-classes.tab
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜source-to-classes.tab.keystream
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜source-to-classes.tab.keystream.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜source-to-classes.tab.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜source-to-classes.tab.values.at
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜source-to-classes.tab_i
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜source-to-classes.tab_i.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜subtypes.tab
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜subtypes.tab.keystream
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜subtypes.tab.keystream.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜subtypes.tab.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜subtypes.tab.values.at
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜subtypes.tab_i
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜subtypes.tab_i.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜supertypes.tab
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜supertypes.tab.keystream
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜supertypes.tab.keystream.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜supertypes.tab.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜supertypes.tab.values.at
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜supertypes.tab_i
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜supertypes.tab_i.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂lookups
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜counters.tab
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜file-to-id.tab
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜file-to-id.tab.keystream
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜file-to-id.tab.keystream.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜file-to-id.tab.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜file-to-id.tab.values.at
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜file-to-id.tab_i
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜file-to-id.tab_i.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜id-to-file.tab
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜id-to-file.tab.keystream
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜id-to-file.tab.keystream.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜id-to-file.tab.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜id-to-file.tab.values.at
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜id-to-file.tab_i
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜id-to-file.tab_i.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜lookups.tab
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜lookups.tab.keystream
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜lookups.tab.keystream.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜lookups.tab.len
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜lookups.tab.values.at
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜lookups.tab_i
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜lookups.tab_i.len
 ┃ ┃ ┃ ┃ ┃ ┗ 📜last-build.bin
 ┃ ┃ ┃ ┃ ┗ 📂local-state
 ┃ ┃ ┃ ┃ ┃ ┗ 📜build-history.bin
 ┃ ┃ ┣ 📂kotlinToolingMetadata
 ┃ ┃ ┃ ┗ 📜kotlin-tooling-metadata.json
 ┃ ┃ ┣ 📂outputs
 ┃ ┃ ┃ ┣ 📂apk
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┣ 📜app-debug.apk
 ┃ ┃ ┃ ┃ ┃ ┗ 📜output-metadata.json
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┣ 📜app-release.apk
 ┃ ┃ ┃ ┃ ┃ ┗ 📜output-metadata.json
 ┃ ┃ ┃ ┣ 📂logs
 ┃ ┃ ┃ ┃ ┣ 📜manifest-merger-debug-report.txt
 ┃ ┃ ┃ ┃ ┗ 📜manifest-merger-release-report.txt
 ┃ ┃ ┃ ┣ 📂native-debug-symbols
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📜native-debug-symbols.zip
 ┃ ┃ ┃ ┗ 📂sdk-dependencies
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┗ 📜sdkDependencies.txt
 ┃ ┃ ┣ 📂snapshot
 ┃ ┃ ┃ ┗ 📂kotlin
 ┃ ┃ ┗ 📂tmp
 ┃ ┃ ┃ ┣ 📂compileDebugJavaWithJavac
 ┃ ┃ ┃ ┃ ┣ 📂compileTransaction
 ┃ ┃ ┃ ┃ ┃ ┣ 📂backup-dir
 ┃ ┃ ┃ ┃ ┃ ┗ 📂stash-dir
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜BuildConfig.class.uniqueId0
 ┃ ┃ ┃ ┃ ┗ 📜previous-compilation-data.bin
 ┃ ┃ ┃ ┣ 📂compileReleaseJavaWithJavac
 ┃ ┃ ┃ ┃ ┗ 📜previous-compilation-data.bin
 ┃ ┃ ┃ ┗ 📂kotlin-classes
 ┃ ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┃ ┣ 📂com
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂mangoapp
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MainActivity.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MainApplication$reactNativeHost$1.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MainApplication.class
 ┃ ┃ ┃ ┃ ┃ ┗ 📂META-INF
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜app_debug.kotlin_module
 ┃ ┃ ┃ ┃ ┗ 📂release
 ┃ ┃ ┃ ┃ ┃ ┣ 📂com
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂mangoapp
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MainActivity.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MainApplication$reactNativeHost$1.class
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MainApplication.class
 ┃ ┃ ┃ ┃ ┃ ┗ 📂META-INF
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜app_release.kotlin_module
 ┃ ┣ 📂src
 ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┗ 📜AndroidManifest.xml
 ┃ ┃ ┗ 📂main
 ┃ ┃ ┃ ┣ 📂java
 ┃ ┃ ┃ ┃ ┗ 📂com
 ┃ ┃ ┃ ┃ ┃ ┗ 📂mangoapp
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MainActivity.kt
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MainApplication.kt
 ┃ ┃ ┃ ┣ 📂res
 ┃ ┃ ┃ ┃ ┣ 📂drawable
 ┃ ┃ ┃ ┃ ┃ ┗ 📜rn_edit_text_material.xml
 ┃ ┃ ┃ ┃ ┣ 📂mipmap-hdpi
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ic_launcher.png
 ┃ ┃ ┃ ┃ ┃ ┗ 📜ic_launcher_round.png
 ┃ ┃ ┃ ┃ ┣ 📂mipmap-mdpi
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ic_launcher.png
 ┃ ┃ ┃ ┃ ┃ ┗ 📜ic_launcher_round.png
 ┃ ┃ ┃ ┃ ┣ 📂mipmap-xhdpi
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ic_launcher.png
 ┃ ┃ ┃ ┃ ┃ ┗ 📜ic_launcher_round.png
 ┃ ┃ ┃ ┃ ┣ 📂mipmap-xxhdpi
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ic_launcher.png
 ┃ ┃ ┃ ┃ ┃ ┗ 📜ic_launcher_round.png
 ┃ ┃ ┃ ┃ ┣ 📂mipmap-xxxhdpi
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ic_launcher.png
 ┃ ┃ ┃ ┃ ┃ ┗ 📜ic_launcher_round.png
 ┃ ┃ ┃ ┃ ┗ 📂values
 ┃ ┃ ┃ ┃ ┃ ┣ 📜strings.xml
 ┃ ┃ ┃ ┃ ┃ ┗ 📜styles.xml
 ┃ ┃ ┃ ┗ 📜AndroidManifest.xml
 ┃ ┣ 📜build.gradle
 ┃ ┣ 📜debug.keystore
 ┃ ┣ 📜my-release-key.keystore
 ┃ ┗ 📜proguard-rules.pro
 ┣ 📂build
 ┃ ┗ 📂kotlin
 ┃ ┃ ┗ 📂sessions
 ┣ 📂gradle
 ┃ ┗ 📂wrapper
 ┃ ┃ ┣ 📜gradle-wrapper.jar
 ┃ ┃ ┗ 📜gradle-wrapper.properties
 ┣ 📜build.gradle
 ┣ 📜gradle.properties
 ┣ 📜gradlew
 ┣ 📜gradlew.bat
 ┣ 📜my-release-key.keystore
 ┗ 📜settings.gradle
┣ 📦assets
 ┣ 📜adaptive-icon.png
 ┣ 📜arrow_go.png
 ┣ 📜camera.png
 ┣ 📜check.png
 ┣ 📜delete.png
 ┣ 📜diseaseleaf.png
 ┣ 📜favicon.png
 ┣ 📜focusedHome.png
 ┣ 📜focusedMango.png
 ┣ 📜focusedMy.png
 ┣ 📜focusedTest.png
 ┣ 📜galary.png
 ┣ 📜happy_mango.png
 ┣ 📜home.png
 ┣ 📜icon.png
 ┣ 📜mango.png
 ┣ 📜my.png
 ┣ 📜protagonist_mango.png
 ┣ 📜sadMango.png
 ┣ 📜sad_mango.png
 ┣ 📜search.png
 ┣ 📜splash.png
 ┣ 📜state_mango.png
 ┣ 📜test.png
 ┣ 📜과수병.png
 ┣ 📜기온팁.png
 ┣ 📜망하지망고.png
 ┣ 📜적지선택팁.png
 ┗ 📜탄저병.png
┣ 📦home
 ┣ 📜Home.jsx
 ┗ 📜index.js
┣ 📦ios
 ┣ 📂MangoApp
 ┃ ┣ 📂Images.xcassets
 ┃ ┃ ┣ 📂AppIcon.appiconset
 ┃ ┃ ┃ ┗ 📜Contents.json
 ┃ ┃ ┗ 📜Contents.json
 ┃ ┣ 📜AppDelegate.h
 ┃ ┣ 📜AppDelegate.mm
 ┃ ┣ 📜Info.plist
 ┃ ┣ 📜LaunchScreen.storyboard
 ┃ ┗ 📜main.m
 ┣ 📂MangoApp.xcodeproj
 ┃ ┣ 📂xcshareddata
 ┃ ┃ ┗ 📂xcschemes
 ┃ ┃ ┃ ┗ 📜MangoApp.xcscheme
 ┃ ┗ 📜project.pbxproj
 ┣ 📂MangoAppTests
 ┃ ┣ 📜Info.plist
 ┃ ┗ 📜MangoAppTests.m
 ┣ 📜.xcode.env
 ┗ 📜Podfile
┣ 📦list
 ┣ 📂history
 ┃ ┣ 📜History.tsx
 ┃ ┗ 📜index.js
 ┣ 📜index.js
 ┗ 📜List.tsx
┣ 📦login
 ┣ 📜index.js
 ┗ 📜Login.jsx
┣ 📦mango_FE
 ┣ 📂.bundle
 ┃ ┗ 📜config
 ┣ 📂.git
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜applypatch-msg.sample
 ┃ ┃ ┣ 📜commit-msg.sample
 ┃ ┃ ┣ 📜fsmonitor-watchman.sample
 ┃ ┃ ┣ 📜post-update.sample
 ┃ ┃ ┣ 📜pre-applypatch.sample
 ┃ ┃ ┣ 📜pre-commit.sample
 ┃ ┃ ┣ 📜pre-merge-commit.sample
 ┃ ┃ ┣ 📜pre-push.sample
 ┃ ┃ ┣ 📜pre-rebase.sample
 ┃ ┃ ┣ 📜pre-receive.sample
 ┃ ┃ ┣ 📜prepare-commit-msg.sample
 ┃ ┃ ┣ 📜push-to-checkout.sample
 ┃ ┃ ┣ 📜sendemail-validate.sample
 ┃ ┃ ┗ 📜update.sample
 ┃ ┣ 📂info
 ┃ ┃ ┗ 📜exclude
 ┃ ┣ 📂logs
 ┃ ┃ ┣ 📂refs
 ┃ ┃ ┃ ┣ 📂heads
 ┃ ┃ ┃ ┃ ┣ 📜android
 ┃ ┃ ┃ ┃ ┗ 📜main
 ┃ ┃ ┃ ┗ 📂remotes
 ┃ ┃ ┃ ┃ ┗ 📂origin
 ┃ ┃ ┃ ┃ ┃ ┣ 📂feat
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜tip
 ┃ ┃ ┃ ┃ ┃ ┣ 📜android
 ┃ ┃ ┃ ┃ ┃ ┣ 📜android_app
 ┃ ┃ ┃ ┃ ┃ ┣ 📜HEAD
 ┃ ┃ ┃ ┃ ┃ ┗ 📜main
 ┃ ┃ ┗ 📜HEAD
 ┃ ┣ 📂objects
 ┃ ┃ ┣ 📂03
 ┃ ┃ ┃ ┗ 📜37f0d8bed5bd5c9c1cf07aeada5941632b9483
 ┃ ┃ ┣ 📂04
 ┃ ┃ ┃ ┗ 📜f5bc3facce7259781d9108ccf0472f8717fe15
 ┃ ┃ ┣ 📂06
 ┃ ┃ ┃ ┗ 📜0ec41ad410c3ea09230c66271d6ace26041b3b
 ┃ ┃ ┣ 📂08
 ┃ ┃ ┃ ┗ 📜1064cd41b8261884794722a9aaee33922e448a
 ┃ ┃ ┣ 📂0e
 ┃ ┃ ┃ ┗ 📜d9c9fd4e58d93e363d53834f867efc978707e7
 ┃ ┃ ┣ 📂11
 ┃ ┃ ┃ ┗ 📜e8ded581102d03c1207adfc6967e3fd52e9f81
 ┃ ┃ ┣ 📂16
 ┃ ┃ ┃ ┣ 📜095b88961fbcde18e516bc0f78cba725d6c2da
 ┃ ┃ ┃ ┗ 📜16287d26849d2e7f0f2e4cf4abee53a674fc68
 ┃ ┃ ┣ 📂18
 ┃ ┃ ┃ ┗ 📜65328019670e9dcdf6068d18e22a4ae3d62f09
 ┃ ┃ ┣ 📂1d
 ┃ ┃ ┃ ┗ 📜f955b186c79502281eb2ec5676b08eaab46252
 ┃ ┃ ┣ 📂1e
 ┃ ┃ ┃ ┣ 📜3f0757ec95b3b7dfa8fddc722c7108138cad32
 ┃ ┃ ┃ ┣ 📜449bea5e3a86ddacb76f876b8344395562496c
 ┃ ┃ ┃ ┗ 📜96cf0220f75202c9579b4ec378c86ca5c3e886
 ┃ ┃ ┣ 📂21
 ┃ ┃ ┃ ┗ 📜f0ecc12c80d79dc3fae57fb7bec2d08971ca37
 ┃ ┃ ┣ 📂22
 ┃ ┃ ┃ ┗ 📜1f4bdfeae5aea5167501b4dfe848c9fdb080c4
 ┃ ┃ ┣ 📂23
 ┃ ┃ ┃ ┗ 📜7e7a0593f50f5a88f05d29747e075a95ceb476
 ┃ ┃ ┣ 📂24
 ┃ ┃ ┃ ┗ 📜6408c37c4386996a2e747d1525b0aee049134a
 ┃ ┃ ┣ 📂25
 ┃ ┃ ┃ ┗ 📜01fb3f0b31481e98731668d5179121720dabd7
 ┃ ┃ ┣ 📂2a
 ┃ ┃ ┃ ┗ 📜8caa6be410008e6d95e3afcc10379e8d760977
 ┃ ┃ ┣ 📂2b
 ┃ ┃ ┃ ┗ 📜562500de93a67d695c9bc04820403c885d46ef
 ┃ ┃ ┣ 📂2c
 ┃ ┃ ┃ ┗ 📜6d41e1a8bcfb6dbebc773315c1da7d647d6ffc
 ┃ ┃ ┣ 📂2e
 ┃ ┃ ┃ ┗ 📜19a40b284126840592a052a7a040f4f4b05cd9
 ┃ ┃ ┣ 📂2f
 ┃ ┃ ┃ ┗ 📜d12d37252735fb64ec20f608c2cfabfeea3c8d
 ┃ ┃ ┣ 📂31
 ┃ ┃ ┃ ┣ 📜62b7a68dfc6188b0c17f5b458c1ad839ce1f7c
 ┃ ┃ ┃ ┣ 📜a761b40b00372b58ca3cf7e452643b0cf6df25
 ┃ ┃ ┃ ┣ 📜b5d184b026c1d018e0003b3b5da7dee6a8a12e
 ┃ ┃ ┃ ┗ 📜c5276e99bf303956708b4181ba32d6f6e9eccc
 ┃ ┃ ┣ 📂32
 ┃ ┃ ┃ ┗ 📜e5bfd81f3333cedcacb370e00588d558b31fb2
 ┃ ┃ ┣ 📂34
 ┃ ┃ ┃ ┗ 📜9d77f49c3e45c7802419247b0e3e2b51f47afe
 ┃ ┃ ┣ 📂37
 ┃ ┃ ┃ ┗ 📜5c8b96e2501d03cd36f45821f2e4c1f2b2cca6
 ┃ ┃ ┣ 📂38
 ┃ ┃ ┃ ┗ 📜5e18f6f69daea23e3d662a0336fde4ecac5816
 ┃ ┃ ┣ 📂3a
 ┃ ┃ ┃ ┗ 📜4fb633c6b6f5e0a67b79fa70a3be118ae2204b
 ┃ ┃ ┣ 📂3c
 ┃ ┃ ┃ ┗ 📜85aa45b2debd0d33f82f61451a6eb35f053cbb
 ┃ ┃ ┣ 📂3f
 ┃ ┃ ┃ ┗ 📜f1e295b69a3536b59b09b59866f54929278fe0
 ┃ ┃ ┣ 📂46
 ┃ ┃ ┃ ┗ 📜1b28eeef0c24e207515cac581d8385783f8d15
 ┃ ┃ ┣ 📂4d
 ┃ ┃ ┃ ┣ 📜b9d17f8778ede0f463fa543a2583c9c497c1d8
 ┃ ┃ ┃ ┗ 📜d328315b91ba058227e7c080eaf7d44248f0ca
 ┃ ┃ ┣ 📂57
 ┃ ┃ ┃ ┗ 📜62db8cf2333807fefcc43f1344fa917a90777f
 ┃ ┃ ┣ 📂5b
 ┃ ┃ ┃ ┗ 📜1790fb9b581ca525343af7579d90a926b0c33c
 ┃ ┃ ┣ 📂5c
 ┃ ┃ ┃ ┗ 📜0884440f4fb154382fd35eaa8eea561d227258
 ┃ ┃ ┣ 📂5e
 ┃ ┃ ┃ ┗ 📜dbf5304ae222c731bf75dc0c1c75c6df75c4d3
 ┃ ┃ ┣ 📂5f
 ┃ ┃ ┃ ┗ 📜61eb1f272baccb212afa09eb49b8d0b90871a6
 ┃ ┃ ┣ 📂65
 ┃ ┃ ┃ ┗ 📜6d575cad20a23b6728f19415df36ce112f35a7
 ┃ ┃ ┣ 📂69
 ┃ ┃ ┃ ┗ 📜d1cbc17406ba44e1fbd61dd9bd32b99522f137
 ┃ ┃ ┣ 📂6a
 ┃ ┃ ┃ ┣ 📜1af667634e4f070d1b16423a2cb816793affbe
 ┃ ┃ ┃ ┣ 📜1f11bb14e3be56c9609fe2f813b684e1874ad2
 ┃ ┃ ┃ ┗ 📜49849cec7400c8626fca2c0bce269e821c1f21
 ┃ ┃ ┣ 📂6c
 ┃ ┃ ┃ ┗ 📜b379021d4fa045c6ec5d7e07d67302f35290d3
 ┃ ┃ ┣ 📂6e
 ┃ ┃ ┃ ┗ 📜f442d0771f64cde799c952d1d1ccaafd85e8e3
 ┃ ┃ ┣ 📂6f
 ┃ ┃ ┃ ┗ 📜808aabf83b6be83460735a7969c01013949341
 ┃ ┃ ┣ 📂70
 ┃ ┃ ┃ ┗ 📜b5eb3ece5f34e29106beda8f151a74c27b23f0
 ┃ ┃ ┣ 📂75
 ┃ ┃ ┃ ┗ 📜564c6e55b4fed5abf3b89becb1a7db193eaf7f
 ┃ ┃ ┣ 📂78
 ┃ ┃ ┃ ┗ 📜572561e33720c600c872ebfd9a986394ecaa94
 ┃ ┃ ┣ 📂7a
 ┃ ┃ ┃ ┗ 📜31c0581780d172b28a3377f112f5ed64da9d19
 ┃ ┃ ┣ 📂7c
 ┃ ┃ ┃ ┗ 📜176457c580fd9996065fc738d68a5b9501ae12
 ┃ ┃ ┣ 📂81
 ┃ ┃ ┃ ┗ 📜5a2a0e777325d814b7cb1417fd06194abad70e
 ┃ ┃ ┣ 📂82
 ┃ ┃ ┃ ┗ 📜dda152b6b1f5a166f81873b144fd511ac1f304
 ┃ ┃ ┣ 📂84
 ┃ ┃ ┃ ┗ 📜9b3675200f9186541db01beae01dc6f46842f0
 ┃ ┃ ┣ 📂87
 ┃ ┃ ┃ ┗ 📜9ce90a711c82ea99e9e59427e3f295a03b0ad2
 ┃ ┃ ┣ 📂8a
 ┃ ┃ ┃ ┗ 📜834487b6324803f3e10e23acd7e8dafdcab2eb
 ┃ ┃ ┣ 📂8b
 ┃ ┃ ┃ ┗ 📜757bb8b3c98b24e4ee8471109282d9eea6ba88
 ┃ ┃ ┣ 📂94
 ┃ ┃ ┃ ┗ 📜6cc72399db616da411e2da9425d18785976a73
 ┃ ┃ ┣ 📂95
 ┃ ┃ ┃ ┗ 📜2e943c139721f26439ad2c3ac7087fdda41702
 ┃ ┃ ┣ 📂97
 ┃ ┃ ┃ ┗ 📜00c35f4aea11aac9924e82aaefc0c329364273
 ┃ ┃ ┣ 📂98
 ┃ ┃ ┃ ┗ 📜9ba7f46a56c4bfdcee516f26408433651a7df1
 ┃ ┃ ┣ 📂99
 ┃ ┃ ┃ ┗ 📜1efa511d9d1d49de0ba1aee7de58d8101d4781
 ┃ ┃ ┣ 📂9b
 ┃ ┃ ┃ ┣ 📜b8c724f6d51b417cb613b41fcaf0a422029576
 ┃ ┃ ┃ ┗ 📜bbd80cd86ce2d88e17cfd91d8c9a5d3334b124
 ┃ ┃ ┣ 📂a2
 ┃ ┃ ┃ ┗ 📜d9d7190f840eb0f0a262fa927eeb2b3022a1a3
 ┃ ┃ ┣ 📂a3
 ┃ ┃ ┃ ┗ 📜95425bf013941d138324654a987cce5e01d6d2
 ┃ ┃ ┣ 📂a6
 ┃ ┃ ┃ ┗ 📜a924964e1ae5dc64bc954ad3ab76c9c4bd919d
 ┃ ┃ ┣ 📂a7
 ┃ ┃ ┃ ┗ 📜4e03cbbbd0a93b2fe560a045315d5ebfcd360e
 ┃ ┃ ┣ 📂aa
 ┃ ┃ ┃ ┣ 📜25c532e12dc4d66e48fed8926289c9e2dd886e
 ┃ ┃ ┃ ┗ 📜cc50f0c10d88e805884b4aa5fa58e8e9361080
 ┃ ┃ ┣ 📂ae
 ┃ ┃ ┃ ┗ 📜0b9f840f6dc0aeb950d96829121dd9929f594e
 ┃ ┃ ┣ 📂b2
 ┃ ┃ ┃ ┣ 📜4877fcd3b08cba0e396cf66ae8b686312cc504
 ┃ ┃ ┃ ┗ 📜c90a259786469b40b97cb267e08dea0d428936
 ┃ ┃ ┣ 📂b5
 ┃ ┃ ┃ ┗ 📜945fd3b05291af14fb22ac23c6aed22e139ec3
 ┃ ┃ ┣ 📂b8
 ┃ ┃ ┃ ┗ 📜ed77f0e664accd84d5febf24a3b4c4f8d9dba2
 ┃ ┃ ┣ 📂b9
 ┃ ┃ ┃ ┗ 📜025ccbebc68603617e3614f90df1ddcf8eadcb
 ┃ ┃ ┣ 📂bf
 ┃ ┃ ┃ ┣ 📜56b8ceeac75f83a22b86d417cb254037fbb880
 ┃ ┃ ┃ ┗ 📜883eea06bdfdcf693e1858cc94ef6698fe7dd9
 ┃ ┃ ┣ 📂c3
 ┃ ┃ ┃ ┗ 📜17abbe54d3313f93320c9189eae5ac2c029f21
 ┃ ┃ ┣ 📂c5
 ┃ ┃ ┃ ┗ 📜0c30a4ec0caca32d9852cff09e8c3ca88c90be
 ┃ ┃ ┣ 📂ca
 ┃ ┃ ┃ ┗ 📜8af4c3e14a5e64b96b84d346c18b377de469ff
 ┃ ┃ ┣ 📂d1
 ┃ ┃ ┃ ┣ 📜01cd4c6bb1be912338398e3d2cf1d2b648499f
 ┃ ┃ ┃ ┗ 📜a406df553c0bd994c9c50c3a195bdbcf2739bf
 ┃ ┃ ┣ 📂d2
 ┃ ┃ ┃ ┗ 📜a8b8f73d53b99e6444ed9c96c2b263493faefd
 ┃ ┃ ┣ 📂d3
 ┃ ┃ ┃ ┗ 📜beddcdee8ec9167f1ddd97c23ccf35d9ff4fa9
 ┃ ┃ ┣ 📂d8
 ┃ ┃ ┃ ┗ 📜bdb80d69fbb5a9cc6c8f658368564656a248ff
 ┃ ┃ ┣ 📂d9
 ┃ ┃ ┃ ┗ 📜89ad2e2dcdc100d95762852fe40fdbe5b21637
 ┃ ┃ ┣ 📂da
 ┃ ┃ ┃ ┗ 📜30db7f7063cd800da396e60aaa8b25334ab2f9
 ┃ ┃ ┣ 📂e2
 ┃ ┃ ┃ ┣ 📜4f65e82c80712e3cd30381af4341ec71bfa8c2
 ┃ ┃ ┃ ┗ 📜b9c19afedf194d1e92233228b6660a6986b608
 ┃ ┃ ┣ 📂e4
 ┃ ┃ ┃ ┣ 📜8971d06a25e9d4be7655667faca5dfe07a4a9a
 ┃ ┃ ┃ ┗ 📜a5d3cec0bbfe1ec8f29f249f856ea7966d16a8
 ┃ ┃ ┣ 📂e6
 ┃ ┃ ┃ ┣ 📜9de29bb2d1d6434b8b29ae775ad8c2e48c5391
 ┃ ┃ ┃ ┗ 📜c7a8fb772dca52325bd21ff2b1dcb3632f1a7d
 ┃ ┃ ┣ 📂e7
 ┃ ┃ ┃ ┗ 📜d78d23c33831b4f4a85ba31273c7f5efec8c8e
 ┃ ┃ ┣ 📂e8
 ┃ ┃ ┃ ┗ 📜0cfc73e1db4be7a180757c2715367fbecf2b47
 ┃ ┃ ┣ 📂eb
 ┃ ┃ ┃ ┗ 📜8bf15ef4114c2d0dc663d7691963e527f5f3d5
 ┃ ┃ ┣ 📂f2
 ┃ ┃ ┃ ┗ 📜94767f2ccf7dcc6af977f5480ed9d528c66756
 ┃ ┃ ┣ 📂f3
 ┃ ┃ ┃ ┗ 📜589e1a03449d97f2e3e818ff06722928e29010
 ┃ ┃ ┣ 📂f4
 ┃ ┃ ┃ ┣ 📜7dc287e79215441e7774077b38ef85c0a4d3d2
 ┃ ┃ ┃ ┗ 📜8e4c23ddf02ba2a0595016445e090498dc364e
 ┃ ┃ ┣ 📂f5
 ┃ ┃ ┃ ┗ 📜ec9dc1b3f7f0e8252b5d3a0639011d37ac693c
 ┃ ┃ ┣ 📂f7
 ┃ ┃ ┃ ┗ 📜729822b3a1b184d71fa22e7231b252c60e0ae3
 ┃ ┃ ┣ 📂f9
 ┃ ┃ ┃ ┗ 📜4848fe65b1c5662790ce480a82885f3a839620
 ┃ ┃ ┣ 📂fa
 ┃ ┃ ┃ ┗ 📜87eef52acad15aa4abffb945404c4fcbf38e6a
 ┃ ┃ ┣ 📂fe
 ┃ ┃ ┃ ┗ 📜5c14806a6b15ecc9ae5a3d6464cae2d357ee9d
 ┃ ┃ ┣ 📂info
 ┃ ┃ ┗ 📂pack
 ┃ ┃ ┃ ┣ 📜pack-cd9f4333db1d4cc67a7cfe62e629e333bf21e845.idx
 ┃ ┃ ┃ ┣ 📜pack-cd9f4333db1d4cc67a7cfe62e629e333bf21e845.pack
 ┃ ┃ ┃ ┣ 📜pack-cd9f4333db1d4cc67a7cfe62e629e333bf21e845.rev
 ┃ ┃ ┃ ┣ 📜pack-f7bf54e9861626cb3005ab3e7a93c5dd2a305b23.idx
 ┃ ┃ ┃ ┣ 📜pack-f7bf54e9861626cb3005ab3e7a93c5dd2a305b23.pack
 ┃ ┃ ┃ ┗ 📜pack-f7bf54e9861626cb3005ab3e7a93c5dd2a305b23.rev
 ┃ ┣ 📂refs
 ┃ ┃ ┣ 📂heads
 ┃ ┃ ┃ ┣ 📜android
 ┃ ┃ ┃ ┗ 📜main
 ┃ ┃ ┣ 📂remotes
 ┃ ┃ ┃ ┗ 📂origin
 ┃ ┃ ┃ ┃ ┣ 📂feat
 ┃ ┃ ┃ ┃ ┃ ┗ 📜tip
 ┃ ┃ ┃ ┃ ┣ 📜android
 ┃ ┃ ┃ ┃ ┣ 📜android_app
 ┃ ┃ ┃ ┃ ┣ 📜HEAD
 ┃ ┃ ┃ ┃ ┗ 📜main
 ┃ ┃ ┗ 📂tags
 ┃ ┣ 📜COMMIT_EDITMSG
 ┃ ┣ 📜config
 ┃ ┣ 📜description
 ┃ ┣ 📜FETCH_HEAD
 ┃ ┣ 📜HEAD
 ┃ ┣ 📜index
 ┃ ┣ 📜ORIG_HEAD
 ┃ ┗ 📜packed-refs
 ┣ 📂.github
 ┃ ┗ 📜PULL_REQUEST_TEMPLATE.md
 ┣ 📂.vscode
 ┃ ┗ 📜settings.json
 ┣ 📂android
 ┃ ┣ 📂app
 ┃ ┃ ┣ 📂src
 ┃ ┃ ┃ ┣ 📂debug
 ┃ ┃ ┃ ┃ ┗ 📜AndroidManifest.xml
 ┃ ┃ ┃ ┗ 📂main
 ┃ ┃ ┃ ┃ ┣ 📂java
 ┃ ┃ ┃ ┃ ┃ ┗ 📂com
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂mangoproject
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MainActivity.kt
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MainApplication.kt
 ┃ ┃ ┃ ┃ ┣ 📂res
 ┃ ┃ ┃ ┃ ┃ ┣ 📂drawable
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜rn_edit_text_material.xml
 ┃ ┃ ┃ ┃ ┃ ┣ 📂mipmap-hdpi
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ic_launcher.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ic_launcher_round.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂mipmap-mdpi
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ic_launcher.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ic_launcher_round.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂mipmap-xhdpi
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ic_launcher.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ic_launcher_round.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂mipmap-xxhdpi
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ic_launcher.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ic_launcher_round.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂mipmap-xxxhdpi
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ic_launcher.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ic_launcher_round.png
 ┃ ┃ ┃ ┃ ┃ ┗ 📂values
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜strings.xml
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜styles.xml
 ┃ ┃ ┃ ┃ ┗ 📜AndroidManifest.xml
 ┃ ┃ ┣ 📜build.gradle
 ┃ ┃ ┣ 📜debug.keystore
 ┃ ┃ ┗ 📜proguard-rules.pro
 ┃ ┣ 📂gradle
 ┃ ┃ ┗ 📂wrapper
 ┃ ┃ ┃ ┣ 📜gradle-wrapper.jar
 ┃ ┃ ┃ ┗ 📜gradle-wrapper.properties
 ┃ ┣ 📜build.gradle
 ┃ ┣ 📜gradle.properties
 ┃ ┣ 📜gradlew
 ┃ ┣ 📜gradlew.bat
 ┃ ┗ 📜settings.gradle
 ┣ 📂assets
 ┃ ┣ 📜arrow_go.png
 ┃ ┣ 📜happy_mango.png
 ┃ ┣ 📜sad_mango.png
 ┃ ┣ 📜state_mango.png
 ┃ ┗ 📜망하지망고.png
 ┣ 📂ios
 ┃ ┣ 📂MangoProject
 ┃ ┃ ┣ 📂Images.xcassets
 ┃ ┃ ┃ ┣ 📂AppIcon.appiconset
 ┃ ┃ ┃ ┃ ┗ 📜Contents.json
 ┃ ┃ ┃ ┗ 📜Contents.json
 ┃ ┃ ┣ 📜AppDelegate.h
 ┃ ┃ ┣ 📜AppDelegate.mm
 ┃ ┃ ┣ 📜Info.plist
 ┃ ┃ ┣ 📜LaunchScreen.storyboard
 ┃ ┃ ┗ 📜main.m
 ┃ ┣ 📂MangoProject.xcodeproj
 ┃ ┃ ┣ 📂xcshareddata
 ┃ ┃ ┃ ┗ 📂xcschemes
 ┃ ┃ ┃ ┃ ┗ 📜MangoProject.xcscheme
 ┃ ┃ ┗ 📜project.pbxproj
 ┃ ┣ 📂MangoProjectTests
 ┃ ┃ ┣ 📜Info.plist
 ┃ ┃ ┗ 📜MangoProjectTests.m
 ┃ ┣ 📜.xcode.env
 ┃ ┗ 📜Podfile
 ┣ 📂__tests__
 ┃ ┗ 📜App.test.tsx
 ┣ 📜.eslintrc.js
 ┣ 📜.gitignore
 ┣ 📜.prettierrc.js
 ┣ 📜.watchmanconfig
 ┣ 📜App.js
 ┣ 📜app.json
 ┣ 📜babel.config.js
 ┣ 📜Gemfile
 ┣ 📜index.js
 ┣ 📜jest.config.js
 ┣ 📜LICENSE
 ┣ 📜LICENSE.txt
 ┣ 📜metro.config.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜tsconfig.json
┣ 📦my
 ┣ 📜Change.jsx
 ┣ 📜index.js
 ┣ 📜Leave.tsx
 ┣ 📜Logout.tsx
 ┣ 📜My.jsx
 ┣ 📜RealLeave.tsx
 ┗ 📜RealLogout.tsx
┣ 📦signup
 ┣ 📜index.js
 ┗ 📜SignUp.jsx
┣ 📦test
 ┣ 📂result
 ┃ ┣ 📜index.js
 ┃ ┗ 📜Result.jsx
 ┣ 📜index.js
 ┗ 📜Test.jsx
┣ 📦tip
 ┣ 📂detail
 ┃ ┣ 📜Detail.tsx
 ┃ ┗ 📜index.js
 ┣ 📜index.js
 ┗ 📜Tip.tsx
┣ .env
┣ .eslintrc.js
┣ .gitignore
┣ .prettierrc.js
┣ app.json
┣ App.tsx
┣ babel.config.js
┣ Gemfile
┣ index.js
┣ jest.config.js
┣ metro.config.js
┣ navigation.tsx
┣ package-lock.json
┣ package.json
┣ README.md
┣ tsconfig.json


### 4. 시작 가이드

- 로그인 계정 정보

  - ID: yujin00
  - Password: yujin0926$

- 설치 및 실행

  - Installation

    - git clone https://github.com/rocket-mango/mango_FE.git
    - cd mango_FE

  - 실행

    - npm start
    - npm run android

  - 패키지, 툴 설치
    - npm install @react-native-async-storage/async-storage
    - npm install @react-native-community/geolocation
    - npm install @react-navigation/native
    - npm install @react-navigation/native @react-navigation/stack
    - npm install react-native-vector-icons
    - npm install axios
    - npm install react-native-image-picker
    - npm install react-native-dotenv
    - npm install react-native-config

### 5. 화면 구성 / 백엔드 API + Geolocation API + OpenWeatherMap API

- 로그인 화면
  - /api/user/login
  - 입력 : username, password
  - 내용 : 사용자 로그인
  - 출력 : Header의 authorization에 JWT
  - [ ] POST
  - http Header
  - Authorization : Bearer eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiaGVsbG8iLCJ1c2VybmFtZSI6ImhlbGxvIiwibmlja25hbWUiOiJoZWxsbyIsImVtYWlsIjoic2Fsa2pmQGFsZGtmai5jb20iLCJyb2xlIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzA5NjEwMzkxLCJleHAiOjE3MDk2MTM5OTF9.glSZWr-i7n-UdBt6aAzWzYULLDHwtbvXr1gTlprxZk8

![스크린샷 2024-06-18 134902](https://github.com/rocket-mango/mango_FE/assets/117718423/ead4ba55-2908-439f-8ebc-66247c3064e4)

- 홈 화면
  - /api/home
  - 입력 : 없음
  - 내용 : 홈 화면에 띄울 정보를 보냄
  - 출력 : 기상청 정보, 사용자의 마이망고리스트, 사용자 nickname
  - [ ] GET

![스크린샷 2024-06-18 135009](https://github.com/rocket-mango/mango_FE/assets/117718423/d84932c0-f564-4e58-b21e-28204cd5007b)

- 진단 화면, 로딩 화면

![스크린샷 2024-06-18 135032](https://github.com/rocket-mango/mango_FE/assets/117718423/887cbb25-a2c0-4733-be29-1dad68922785)
![스크린샷 2024-06-18 135116](https://github.com/rocket-mango/mango_FE/assets/117718423/f9862755-14c6-4055-be83-690f7f3a33f4)

- 결과 화면
  - /api/disease/diagnosis
  - 입력 : 망고 사진, location
  - 내용 : 망고 검사 진행
  - 출력 : top3 결과 리스트, 망고 결과 리턴
  - [ ] POST

![스크린샷 2024-06-18 135130](https://github.com/rocket-mango/mango_FE/assets/117718423/fd0a538b-fb1a-47d2-bdd6-64734e057caa)
![스크린샷 2024-06-18 135143](https://github.com/rocket-mango/mango_FE/assets/117718423/6749c193-1aea-4b42-90e3-b695ce5bc653)

- 진단 기록 화면
  - /api/disease/my-mango-list
  - 입력 : 없음
  - 내용 : 해당 사용자의 망고 검사 결과 리스트를 반환
  - 출력 : 망고 결과 리스트
  - [ ] GET

![스크린샷 2024-06-18 135159](https://github.com/rocket-mango/mango_FE/assets/117718423/f263687f-50b2-4cbb-ab16-3a6a604b631f)

- 진단 기록 결과 화면
  - /api/disease/{mid}
  - [ ] GET

![스크린샷 2024-06-18 135213](https://github.com/rocket-mango/mango_FE/assets/117718423/865643fb-f967-4fc3-8bb8-23e90483d211)

- 팁 목록 화면
  - /api/farmingInfo/list/{categoryId}

![스크린샷 2024-06-18 135231](https://github.com/rocket-mango/mango_FE/assets/117718423/35c424fc-68ee-43d9-b05a-a32203cd9ee0)

- 팁 화면
  - api/farmingInfo/{fid}
  - 입력: 입력 없습니다. Pathvariable로 fid(farmingInfo id값, 식별자) 만 넣으면 됩니다.
  - [ ] GET

![스크린샷 2024-06-18 135254](https://github.com/rocket-mango/mango_FE/assets/117718423/8fd255fe-6228-45e5-b3cf-67a3fc7d5c5f)

### 📍 Demo

<a href="https://youtu.be/wkHsFAMPMAs?si=NtXd2lCAfklKVJ7O" target="_blank">데모 영상 보러가기</a>
