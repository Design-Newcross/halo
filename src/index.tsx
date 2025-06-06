import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { TypographyPage } from "./pages/TypographyPage";
import { ButtonsPage } from "./pages/ButtonsPage";
import { LinksPage } from "./pages/LinksPage";
import { FormFieldsPage } from "./pages/FormFieldsPage";
import { CheckboxesPage } from "./pages/CheckboxesPage";
import { RadioButtonsPage } from "./pages/RadioButtonsPage";
import { AvatarsPage } from "./pages/AvatarsPage";
import { TagsPage } from "./pages/TagsPage";
import { TabsPage } from "./pages/TabsPage";
import { FiltersPage } from "./pages/FiltersPage";
import { SwitchesPage } from "./pages/SwitchesPage";
import { PaginationPage } from "./pages/PaginationPage";
import { ProgressPage } from "./pages/ProgressPage";
import { HeartsPage } from "./pages/HeartsPage";
import { BottomSheetPage } from "./pages/BottomSheetPage";
import { TablesPage } from "./pages/TablesPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/typography" element={<TypographyPage />} />
          <Route path="/buttons" element={<ButtonsPage />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="/form-fields" element={<FormFieldsPage />} />
          <Route path="/checkboxes" element={<CheckboxesPage />} />
          <Route path="/radio-buttons" element={<RadioButtonsPage />} />
          <Route path="/avatars" element={<AvatarsPage />} />
          <Route path="/tags" element={<TagsPage />} />
          <Route path="/tabs" element={<TabsPage />} />
          <Route path="/filters" element={<FiltersPage />} />
          <Route path="/switches" element={<SwitchesPage />} />
          <Route path="/pagination" element={<PaginationPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/hearts" element={<HeartsPage />} />
          <Route path="/bottom-sheet" element={<BottomSheetPage />} />
          <Route path="/tables" element={<TablesPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
);