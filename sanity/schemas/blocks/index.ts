import { SchemaTypeDefinition } from 'sanity';

import audienceFeedback from './audience-feedback-block';
import hero from './hero-block';
import testimonial from './testimonial-block';

export const blockTypes = [{ type: 'heroBlock' }, { type: 'audienceFeedbackBlock' }, { type: 'testimonialBlock' }];

export const blocks: SchemaTypeDefinition[] = [hero, audienceFeedback, testimonial];
