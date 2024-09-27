import { next } from '../src/webring';

export const onRequestGet: PagesFunction = async (context) => {
  const id = new URL(context.request.url).searchParams.get('id') ?? 'main';
  const item = next(id);
  const url = item?.url ?? new URL(context.request.url).origin;
  return Response.redirect(url, 303);
};