import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { SfButton } from '@storefront-ui/qwik';

export default component$(() => {
  return (
    <>
      <SfButton size='lg' class="m-2">foo</SfButton>
      <SfButton size='base' class="m-2">foo</SfButton>
      <SfButton size='sm' class="m-2">foo</SfButton>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
