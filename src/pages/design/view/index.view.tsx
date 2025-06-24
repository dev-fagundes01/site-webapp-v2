import React, { useEffect } from "react";
import Header from "../../../components/header";
import { HeaderProps } from "../../../components/header/types";
import {
  useScreenReaderAnnouncer,
  useFocusManagement,
} from "../../../hooks/useAccessibility";

const DesignView: React.FC<HeaderProps> = ({ links }) => {
  const { announce } = useScreenReaderAnnouncer();
  const { focusMainContent } = useFocusManagement();

  // Set page title for screen readers
  useEffect(() => {
    document.title = "Design System - Sou Junior";

    // Add meta description if not present
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Sistema de design da Sou Junior com componentes e diretrizes visuais"
      );
    }

    // Announce page change to screen readers
    announce("Página de Design System carregada");

    // Focus main content for better navigation
    setTimeout(() => {
      focusMainContent();
    }, 100);
  }, [announce, focusMainContent]);

  return (
    <div className="design-page">
      <Header links={links} />

      {/* Main content area */}
      <main
        className="design-content"
        role="main"
        aria-label="Conteúdo principal da página de design"
      >
        <section aria-labelledby="design-heading">
          <h1 id="design-heading" tabIndex={-1}>
            Sistema de Design
          </h1>

          <p>
            Bem-vindo ao sistema de design da Sou Junior. Aqui você encontrará
            todos os componentes e diretrizes visuais da nossa plataforma.
          </p>

          {/* Placeholder for future content */}
          <div aria-live="polite" aria-atomic="true">
            {/* Dynamic content will be announced to screen readers */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignView;
